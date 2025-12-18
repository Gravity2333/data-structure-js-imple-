// 860.柠檬水找零
// 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
// 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
// 注意，一开始你手头没有任何零钱。
// 给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

// 示例 1：
// 输入：bills = [5,5,5,10,20]
// 输出：true
// 解释：
// 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
// 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
// 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
// 由于所有客户都得到了正确的找零，所以我们输出 true。

/**
 * 这道题的关键是: 能用 10块钱的找零 就不用5块钱的
 * 因为 2 * 5元可以凑出一张10块钱的 但是10块钱的 不能凑出2张5块的
 * 5块钱 流通性要更强
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const changes = new Map();
  for (const bill of bills) {
    switch (bill) {
      case 5:
        // 不用找钱 存入零钱
        changes.set(5, (changes.get(5) || 0) + 1);
        break;
      case 10:
        // 用 5 找钱
        changes.set(10, (changes.get(10) || 0) + 1);
        if ((changes.get(5) || 0) > 0) {
          changes.set(5, changes.get(5) - 1);
        } else {
          return false;
        }
        break;
      case 20:
        // 用 10 / 2* 5找 先用10找
        changes.set(20, (changes.get(20) || 0) + 1);
        if ((changes.get(10) || 0) >= 1 && (changes.get(5) || 0) >= 1) {
          changes.set(10, changes.get(10) - 1);
           changes.set(5, changes.get(5) - 1);
        } else if ((changes.get(5) || 0) >= 3) {
          changes.set(5, changes.get(5) - 3);
        }else{
            return false
        }
        break;
    }
  }
  return true
};
