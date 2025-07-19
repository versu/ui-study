import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { Children, ReactNode, useRef, useState } from "react"
import { cn } from "~/components/lib/utils"

export type Props = {
  children: ReactNode
}

export const Carousel = ({ children }: Props) => {

  /** スクロール位置監視 */
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('currentIndex', currentIndex);
  const itemCount = Children.count(children);

  /**
   * 指定したindexのアイテムをスクロール
   * @param index 
   */
  const scrollToItem = (index: number) => {
    const container = containerRef.current;
    const item = container?.children[index];

    item?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;

    // 実際のアイテム幅を取得
    const firstItem = container.children[0] as HTMLElement;
    const itemWidth = firstItem?.offsetWidth || container.scrollWidth / itemCount;

    const scrollPosition = container.scrollLeft;

    // snap-startでの簡単なインデックス計算
    let newIndex = Math.floor(scrollPosition / itemWidth);

    // 境界値調整
    newIndex = Math.min(Math.max(newIndex, 0), itemCount - 1);


    // デバッグ情報
    console.log({
      scrollLeft: scrollPosition,
      scrollWidth: container.scrollWidth,
      itemCount,
      itemWidth,
      calculatedIndex: Math.floor(scrollPosition / itemWidth),
      newIndex,
      currentIndex,
      containerClientWidth: container.clientWidth,
      firstItemOffsetWidth: firstItem?.offsetWidth
    });

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < itemCount) {
      setCurrentIndex(newIndex);
    }
  };

  /**
   * 
   */
  const goToPrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      scrollToItem(prevIndex);
    }
  };

  const goToNext = () => {
    const containerWidth = containerRef.current?.clientWidth || 600;
    const firstItem = containerRef.current?.children[0] as HTMLElement;
    const actualItemWidth = firstItem?.offsetWidth || 300;
    const visibleItemCount = Math.floor(containerWidth / actualItemWidth);
    const maxIndex = itemCount - visibleItemCount;

    if (currentIndex < maxIndex) {
      const nextIndex = currentIndex + 1;
      scrollToItem(nextIndex);
    }
  };

  // 表示可能アイテム数の計算
  const containerWidth = containerRef.current?.clientWidth || 600;
  const firstItem = containerRef.current?.children[0] as HTMLElement;
  const actualItemWidth = firstItem?.offsetWidth || 300;
  const visibleItemCount = Math.floor(containerWidth / actualItemWidth);

  // 最後の有効なindexの計算
  const maxIndex = itemCount - visibleItemCount;

  // ボタンの有効/無効状態を判定
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <div className={cn('relative')}>
      {/* カルーセルのコンテナ */}
      <div className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth" ref={containerRef} onScroll={handleScroll}>
        {children}
      </div>

      {/* 左右のスクロールボタン */}
      <button
        disabled={!canGoPrev}
        className={cn(
          "absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 shadow-md transition-colors",
          canGoPrev
            ? "bg-white/80 hover:bg-blue-300 cursor-pointer"
            : "bg-gray-300 cursor-not-allowed opacity-50"
        )}
        onClick={goToPrev}
      >
        <ArrowLeftIcon className="scale-[0.8]" />
      </button>
      <button
        disabled={!canGoNext}
        className={cn(
          "absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 shadow-md transition-colors",
          canGoNext
            ? "bg-white/80 hover:bg-white cursor-pointer"
            : "bg-gray-300 cursor-not-allowed opacity-50"
        )}
        onClick={goToNext}
      >
        <ArrowRightIcon className="scale-[0.8]" />
      </button>
    </div>
  )
}
