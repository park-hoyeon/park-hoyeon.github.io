---
layout: category
title: "커뮤니티 가입/탈퇴하기 기능 구현"
permalink: /project-musical/backend/join-leave/
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "sidebar-category"
  enabled: true

    
---



{% assign posts_with_flutter = site.posts | where: "categories", "flutter" %}
{% assign posts_with_flutter_and_solutions = posts_with_flutter | where: "categories", "solutions" %}

{% for post in posts_with_flutter_and_solutions %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}  


### 파일 구조

1. community.controller.js<br>
2. community.service.js<br>
3. community.repository.js<br>


---
### community.controller.js


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="javascript">
/**
 * @swagger
 * /api/community/type/join:
 *   post:
 *     summary: 커뮤니티 가입 또는 탈퇴
 *     description: 로그인된 사용자가 특정 커뮤니티에 가입하거나 탈퇴합니다. 가입 시 프로필 타입(BASIC/MULTI) 선택 가능하며, MULTI 선택 시 멀티 프로필을 즉시 생성합니다.
 *     tags: [Community]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [communityId, action]
 *             properties:
 *               communityId: { type: integer, example: 3 }
 *               action:
 *                 type: string
 *                 enum: [join, leave]
 *                 example: join
 *               profileType:
 *                 type: string
 *                 description: 가입 시 사용할 프로필 타입 (join일 때만 사용)
 *                 enum: [BASIC, MULTI]
 *                 example: BASIC
 *               multi:
 *                 type: object
 *                 nullable: true
 *                 description: profileType=MULTI일 때 생성할 멀티 프로필 정보
 *                 properties:
 *                   nickname: { type: string, example: "뮤지컬덕후" }
 *                   image: { type: string, nullable: true, example: "https://example.com/image.png" }
 *                   bio: { type: string, nullable: true, example: "배우 덕질은 삶의 활력" }
 *     responses:
 *       200:
 *         description: 처리 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean, example: true }
 *                 message: { type: string, example: "커뮤니티 가입 완료" }
 *       400:
 *         description: 잘못된 요청 또는 처리 실패
 */

router.post("/type/join", authenticateJWT, async (req, res) => {
  try {
    const userId = req.user?.id;
    const { communityId, action, profileType, multi } = req.body;
    if (!userId || !communityId || !["join", "leave"].includes(action)) {
      return res.status(400).json({
        success: false,
        message: "userId, communityId, action(join/leave)을 확인하세요.",
      });
    }
    const message = await handleJoinOrLeaveCommunity(
      userId,
      Number(communityId),
      action,
      profileType,
      multi
    );
    res.status(200).json({ success: true, message });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});
  </code></pre>
</div>


### community.service.js


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="javascript">
export const handleJoinOrLeaveCommunity = async (
  userId,
  communityId,
  action,
  profileType,
  multi
) => {
  const isJoined = await checkUserInCommunity(userId, communityId);

  if (action === "join") {
    if (isJoined) throw new Error("이미 가입된 커뮤니티입니다.");
    
    await prisma.$transaction(async (tx) => {
      await insertUserToCommunity(userId, communityId, tx);
      if (profileType === "MULTI") {
        const dup = await findMultiProfile(communityId, userId, tx);
        if (dup) throw new Error("이미 해당 커뮤니티에 멀티프로필이 있습니다.");
        const ok = await canCreateAnotherMulti(userId);
        if (!ok)
          throw new Error(
            "무료 회원은 멀티프로필을 5개까지 생성할 수 있습니다."
          );
        await createCommunityProfileRepository(
          {
            userId,
            communityId,
            nickname: multi?.nickname ?? "",
            image: multi?.image ?? null,
            bio: multi?.bio ?? null,
          },
          tx
        );
      }
    });
    return "커뮤니티 가입 완료";
  }

  if (action === "leave") {
    if (!isJoined) throw new Error("가입되지 않은 커뮤니티입니다.");
    
    await prisma.$transaction(async (tx) => {
      const mp = await findMultiProfile(communityId, userId, tx);
      if (mp) await deleteCommunityProfileRepository(mp.id, tx);
      await deleteUserFromCommunity(userId, communityId, tx);
    });
    return "커뮤니티 탈퇴 완료";
  }

  throw new Error("유효하지 않은 요청입니다.");
};

// 커뮤니티별 프로필 타입 전환
export const switchCommunityProfileType = async ({
  userId,
  communityId,
  profileType, 
  multi, 
}) => {
  return await prisma.$transaction(async (tx) => {
    const current = await findMultiProfile(communityId, userId, tx);
    const isMulti = !!current;

    if (profileType === "BASIC") {
      if (isMulti) await deleteCommunityProfileRepository(current.id, tx);
      return { changedTo: "BASIC" };
    }

    if (profileType === "MULTI") {
      if (isMulti) throw new Error("이미 멀티프로필을 사용 중입니다.");
      const ok = await canCreateAnotherMulti(userId);
      if (!ok)
        throw new Error("무료 회원은 멀티프로필을 5개까지 생성할 수 있습니다.");
      const created = await createCommunityProfileRepository(
        {
          userId,
          communityId,
          nickname: multi?.nickname ?? "",
          image: multi?.image ?? null,
          bio: multi?.bio ?? null,
        },
        tx
      );
      return { changedTo: "MULTI", profile: created };
    }

    throw new Error("profileType은 BASIC 또는 MULTI여야 합니다.");
  });
};
  </code></pre>
</div>


### community.repository.js


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
<div style="padding:8px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius:5px; background-color: rgba(255, 255, 255, 0.05); color: #f1f1f1; width: 100%; margin-left: 0; margin-right: 0; text-align: left; font-family: monospace;">
  <pre><code class="javascript">
export const checkUserInCommunity = async (
  userId,
  communityId,
  db = prisma
) => {
  const record = await db.userCommunity.findFirst({
    where: {
      userId,
      communityId,
    },
  });
  return !!record;
};
  </code></pre>
</div>
 


---  


[돌아가기: 기능별 API 구현 내용 보러가기](https://park-hoyeon.github.io/project-musical/backend-details)  


<div style="text-align: right; margin-top: 30px;">
  <button onclick="scrollToTop()" style="
    padding: 10px 15x; 
    background-color: #FFEB46; 
    color: black; 
    border: 2px solid #FFEB46; 
    border-radius: 5px; 
    cursor: pointer; 
    font-size: 10px;">
    맨 위로 이동
  </button>
</div>

<script>
  // 맨 위로 이동하는 함수
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
