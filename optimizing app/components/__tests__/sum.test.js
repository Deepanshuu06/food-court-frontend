import { sum } from "../sum"


test("check sum of 2 positive numbers" ,()=>{
    expect(sum(2,5)).toBe(7)
    expect(sum(5,5)).toBe(10)
     
})