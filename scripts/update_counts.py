from pathlib import Path

# 레포 루트 기준
PAGES_ROOT = Path("_pages")

# 세고 싶은 파일 확장자
EXTS = {".md", ".markdown", ".html"}

def count_files_in_dir(folder: Path) -> int:
    return sum(
        1 for p in folder.rglob("*")
        if p.is_file() and p.suffix.lower() in EXTS
    )

def find_dirs_named(root: Path, name: str):
    # name과 같은 이름의 폴더를 _pages 아래에서 전부 찾기 (대소문자 무시)
    name_lower = name.lower()
    return [
        d for d in root.rglob("*")
        if d.is_dir() and d.name.lower() == name_lower
    ]

def main():
    if not PAGES_ROOT.exists():
        print(f"[에러] {PAGES_ROOT} 폴더가 레포 루트에 없습니다. 현재 위치가 레포 루트인지 확인하세요.")
        return

    gold_dirs = find_dirs_named(PAGES_ROOT, "gold")
    silver_dirs = find_dirs_named(PAGES_ROOT, "silver")

    print("=== 찾은 gold 폴더들 ===")
    for d in gold_dirs:
        print(" -", d.as_posix())

    print("=== 찾은 silver 폴더들 ===")
    for d in silver_dirs:
        print(" -", d.as_posix())

    gold_count = sum(count_files_in_dir(d) for d in gold_dirs)
    silver_count = sum(count_files_in_dir(d) for d in silver_dirs)

    data_dir = Path("_data")
    data_dir.mkdir(exist_ok=True)

    out_file = data_dir / "page_counts.yml"
    out_file.write_text(
        "baekjoon:\n"
        f"  gold: {gold_count}\n"
        f"  silver: {silver_count}\n",
        encoding="utf-8"
    )

    print("\n완료! 생성된 파일:", out_file.as_posix())
    print("gold =", gold_count, "silver =", silver_count)

if __name__ == "__main__":
    main()
