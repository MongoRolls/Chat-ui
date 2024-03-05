import { useTrail } from "react-spring";

export default function useStaggeredList(number) {
  const trailAnimes = useTrail(number, {
    // 使用translate3d 可以开启gpu加速，性能更好
    //结束
    transform: "translate3d(0px,0px,0px)",
    //开始
    from: { transform: "translate3d(-50px,0px,0px)" },
    config: {
      mass: 0.8,
      tension: 200,
      friction: 20,
    },

    // delay: 200,
  });

  return trailAnimes;
}
