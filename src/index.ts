interface ICard {
    getInfo(): string
}


class EmptyCard implements ICard {
    public getInfo(): string {
        return ''
    }
}


class Decorator implements ICard{
    protected card: ICard;
    constructor(card: ICard){
        this.card = card
    }
    public getInfo(): string {
        return this.card.getInfo()
    }
}


class PassportCard extends Decorator {
    public getInfo(): string {
        return `PassportCard ${super.getInfo()}`
    }
}

class PolicyCard extends Decorator {
    public getInfo(): string {
        return `PolicyCard ${super.getInfo()}`
    }
}

class BankCard extends Decorator {
    public getInfo(): string {
        return `BankCard ${super.getInfo()}`
    }
}

class DriverLicenseCard extends Decorator {
    public getInfo(): string {
        return `DriverLicenseCard ${super.getInfo()}`
    }
}



// Start Code
const start = () => {
    const card: ICard = new EmptyCard()
    console.log("CardData (0):", card.getInfo())

    const cardWithPassport: ICard = new PassportCard(card)
    console.log("CardData (1):", cardWithPassport.getInfo())

    const cardWithPassportAndDL: ICard = new DriverLicenseCard(cardWithPassport)
    console.log("CardData (2):", cardWithPassportAndDL.getInfo())

    const cardWithPassportDLAndBank: ICard = new BankCard(cardWithPassportAndDL)
    console.log("CardData (3):", cardWithPassportDLAndBank.getInfo())
}
start();