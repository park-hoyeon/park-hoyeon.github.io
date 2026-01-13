from pathlib import Path

# ✅ 레포 루트 기준 경로 (중요!)
GOLD_DIR = Path("_pages/Study/gold")
SILVER_DIR = Path("_pages/Study/silver")

# 세고 싶은 확장자 (너 페이지가 .md라면 이대로 OK)
EXTS = {".md", ".markdown", ".html"}

def count_files(folder: Path) -> int:
    if not folder.exists():
        print(f"[경고] 폴더가 없음: {folder}")
        return 0
    return sum(
        1 for p in folder.rglob("*")
        if p.is_file() and p.suffix.lower() in EXTS
    )

gold_count = count_files(GOLD_DIR)
silver_count = count_files(SILVER_DIR)

# ✅ Jekyll이 읽는 데이터 폴더
data_dir = Path("_data")
data_dir.mkdir(exist_ok=True)

out_file = data_dir / "page_counts.yml"
out_file.write_text(
    "baekjoon:\n"
    f"  gold: {gold_count}\n"
    f"  silver: {silver_count}\n",
    encoding="utf-8"
)

print("완료! 생성된 파일:", out_file)
print("gold =", gold_count, "silver =", silver_count)
