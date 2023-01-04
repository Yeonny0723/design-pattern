import { singletonCounter } from "./counter";

// 생성은 한번만 일어나되, 수정하는 값이 이전 값을 참조함 → 작은 수정이 전체 테스트의 실패로 이어질 수 있음.  → 따라서 테스팅을 할 때마다 이전 수정값을 참조하거나 리셋해주는 과정 필요.

test("increment once should be 1", ()=>{
    singletonCounter.increment();
    expect(singletonCounter.getCount()).toBe(1);
})

test("increment 2 times more should be 3", ()=>{
    singletonCounter.increment();
    singletonCounter.increment();
    expect(singletonCounter.getCount()).toBe(3);
})

test("decrement once should be 2", ()=>{
    singletonCounter.decrement();
    expect(singletonCounter.getCount()).toBe(2);
})
