"use strict";
let count = 0;
let instance;

class Counter{
  constructor(){
      if(instance){ // constructor 메소드 내에서 과거에 인스턴스가 생성된 적이 있는지 점검
          throw new Error("Instance once created!")
      }
      instance = this;
  }
  getCount(){
      return count;
  }
  increment(){
      return ++count;
  }
  decrement(){
      return --count;
  }
}

const singletonCounter = Object.freeze(new Counter()) // Object.freeze: make sure object can't be modified

export { singletonCounter }; // 전역적으로 접근이 가능하도록 export.
