var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 모든 직업의 근간이 되는 추상 클래스 (부모 클래스)
var Character = /** @class */ (function () {
    function Character(name, hp, damage, skillName, skillDamage) {
        if (skillDamage === void 0) { skillDamage = 0; }
        this.name = name;
        this.hp = hp;
        this.damage = damage;
        this.skillName = skillName;
        this.skillDamage = skillDamage;
    }
    // 대상(target)에게 공격을 가하는 메서드 (공통 로직)
    Character.prototype.attack = function (target) {
        console.log("".concat(this.name, "\uAC00 ").concat(target.name, "\uC5D0\uAC8C ").concat(this.damage, " \uD53C\uD574\uB97C \uC785\uD614\uC2B5\uB2C8\uB2E4!"));
        target.takeDamage("", this.damage);
    };
    // 피해를 입었을 때 채력을 감소 시키는 메서드 (공통 로직)
    Character.prototype.takeDamage = function (skillName, damage) {
        if (skillName === void 0) { skillName = ""; }
        this.hp -= damage; // this.hp = this.hp - damage;
        if (skillName.length > 0) {
            console.log("".concat(this.name, "\uAC00 ").concat(skillName, " \uB85C ").concat(damage, " \uD53C\uD574\uB97C \uC785\uC5C8\uC2B5\uB2C8\uB2E4! [ \uD604\uC7AC HP : ").concat(this.hp, "]"));
        }
        else {
            console.log("".concat(this.name, "\uAC00 ").concat(damage, " \uD53C\uD574\uB97C \uC785\uC5C8\uC2B5\uB2C8\uB2E4! [ \uD604\uC7AC HP : ").concat(this.hp, "]"));
        }
    };
    return Character;
}());
//  전사(Warrior) 클래스 (Character 상속)
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name, skillName, skillDamage) {
        return _super.call(this, name, 100, 10, skillName, skillDamage) || this; // 전사의 이름은 "전사", 체력은 100, 공격력은 10 캐릭터의 constructor를 참조
    }
    // 전사 고유의 스킬 구현
    Warrior.prototype.useSkill = function (target) {
        console.log("".concat(this.name, "\uAC00 ").concat(this.skillName, "\uB85C \uC0C1\uB300\uB97C \uACF5\uACA9\uD569\uB2C8\uB2E4!  \uD83D\uDEA7"));
        target.takeDamage(this.skillName, this.skillDamage);
    };
    return Warrior;
}(Character));
// 마법사(Mage) 클래스 (Character 상속)
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name, skillName, skillDamage) {
        return _super.call(this, name, 80, 15, skillName, skillDamage) || this; // 마법사의 이름은 "마법사", 체력은 80, 공격력은 15
    }
    // 마법사 고유의 스킬 구현
    Mage.prototype.useSkill = function (target) {
        console.log("".concat(this.name, "\uAC00 ").concat(this.skillName, "\uC744 \uC2DC\uC804\uD569\uB2C8\uB2E4! \uD83D\uDCA5"));
        target.takeDamage(this.skillName, this.skillDamage);
    };
    return Mage;
}(Character));
// 캐릭터 생성 및 실행
var warrior = new Warrior("바바리안", "뚝배기 깨기", 50);
var mage = new Mage("트페", "신한카드", 30);
// 전사와 마법사의 행동 비교
warrior.attack(mage);
// 전사가 마법사에게 10 피해를 입혔습니다!
// 마법사가 10 피해를 입었습니다! [현재 Hp: 70]
mage.attack(warrior);
// 마법사가 전사에게 15피해를 입혔습니다!
// 전사가 15의 피해를 입었습니다! [현재 Hp:85]
// 각 직업의 특수 스킬 사용
warrior.useSkill(mage); // 전사가 방패 방어를 사용합니다! 🚧
mage.useSkill(warrior); // 마법사가 파이어볼을 시전합니다! 💥
// 전사 = new Warrior()
// 마법사 = new Magicion()
// 전사.attack(마법사)
/*
attack(target === 마법사): void {
  console.log(
    `${이순신}가 ${유희왕}에게 ${100} 피해를 입혔습니다!`
  );
  target.takeDamage(100);
  마법사.takeDamage(100);
}

 takeDamage(damage: number): void {
    마법사.hp -= damage; // this.hp = this.hp - damage;
  }
*/
