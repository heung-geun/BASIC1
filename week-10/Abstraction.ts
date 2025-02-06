interface Skill {
  useSkill(target: Character): void;
}

// 모든 직업의 근간이 되는 추상 클래스 (부모 클래스)
class Character {
  constructor(
    protected name: string,
    protected hp: number,
    protected damage: number,
    protected skillName: string,
    protected skillDamage: number = 0
  ) {}

  // 대상(target)에게 공격을 가하는 메서드 (공통 로직)
  attack(target: Character): void {
    console.log(
      `${this.name}가 ${target.name}에게 ${this.damage} 피해를 입혔습니다!`
    );
    target.takeDamage("", this.damage);
  }

  // 피해를 입었을 때 채력을 감소 시키는 메서드 (공통 로직)
  takeDamage(skillName: string = "", damage: number): void {
    this.hp -= damage; // this.hp = this.hp - damage;
    if (skillName.length > 0) {
      console.log(
        `${this.name}가 ${skillName} 로 ${damage} 피해를 입었습니다! [ 현재 HP : ${this.hp}]`
      );
    } else {
      console.log(
        `${this.name}가 ${damage} 피해를 입었습니다! [ 현재 HP : ${this.hp}]`
      );
    }
  }
}

//  전사(Warrior) 클래스 (Character 상속)
class Warrior extends Character implements Skill {
  constructor(name: string, skillName: string, skillDamage: number) {
    super(name, 100, 10, skillName, skillDamage); // 전사의 이름은 "전사", 체력은 100, 공격력은 10 캐릭터의 constructor를 참조
  }

  // 전사 고유의 스킬 구현
  useSkill(target: Character): void {
    console.log(`${this.name}가 ${this.skillName}로 상대를 공격합니다!  🚧`);
    target.takeDamage(this.skillName, this.skillDamage);
  }

  // takeDamage(skillName: string, damage: number): void {
  //   this.hp -= damage;
  //   console.log(
  //     `${this.name}가 ${skillName}으로 ${damage} 피해를 입었습니다! [ 현재 HP : ${this.hp}]`
  //   );
  // }
}

// 마법사(Mage) 클래스 (Character 상속)
class Mage extends Character implements Skill {
  constructor(name: string, skillName: string, skillDamage: number) {
    super(name, 80, 15, skillName, skillDamage); // 마법사의 이름은 "마법사", 체력은 80, 공격력은 15
  }

  // 마법사 고유의 스킬 구현
  useSkill(target: Character): void {
    console.log(`${this.name}가 ${this.skillName}을 시전합니다! 💥`);
    target.takeDamage(this.skillName, this.skillDamage);
  }

  // takeDamage(skillName: string, damage: number): void {
  //   this.hp -= damage;
  //   console.log(
  //     `${this.name}가 ${skillName}으로 ${damage} 피해를 입었습니다! [ 현재 HP : ${this.hp}]`
  //   );
  // }
}

// 캐릭터 생성 및 실행
const warrior = new Warrior("바바리안", "뚝배기 깨기", 50);
const mage = new Mage("트페", "신한카드", 30);

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
