const C3 = self.C3;

C3.Behaviors.FedericoCalchera_HP.Instance = class HPInstance extends globalThis.ISDKBehaviorInstanceBase {

    constructor() {
        super();

        const properties = this._getInitProperties();

        this._healingReceived = 0;
        this._damageTaken = 0;
        this._healingAmount = 0;
        this._damageAmount = 0;
        this._newHP = 0;

        if (properties) {
            this.isEnabled = properties[1];
            this._max = properties[0];
            this._HP = properties[0];
        }
    }

    _postCreate() {
        this._trigger(C3.Behaviors.FedericoCalchera_HP.Cnds.Onanychange);
    }

    get current() {
        return this._HP;
    }

    set current(n) {
        if (!this.isEnabled) return;

        this._HP = Math.min(Math.max(n, 0), this._max);
        this._trigger(C3.Behaviors.FedericoCalchera_HP.Cnds.Onanychange);
    }

    get max() { return this._max; }

    set max(n) {
        if (!this.isEnabled) return;

        this._max = Math.max(n, 0);
        this._HP = Math.min(this._HP, this._max);
        this._trigger(C3.Behaviors.FedericoCalchera_HP.Cnds.Onanychange);
    }

    get normalizedCurrent() {
        return (this._HP / this._max);
    }

    get damageTaken() { return this._damageTaken }

    get damageReceived() { return this._damageReceived }

    get healingAmount() { return this._healingAmount }

    get healingReceived() { return this._healingReceived }

    damage(amount) {
        if (!this.isEnabled) return;

        this._newHP = Math.max(this._HP - amount, 0);

        this._damageReceived = this._HP - this._newHP;
        this._damageAmount = amount;
        this._HP = this._newHP;
        this._trigger(C3.Behaviors.FedericoCalchera_HP.Cnds.Onanychange);
        this._trigger(self.C3.Behaviors.FedericoCalchera_HP.Cnds.Hplost);
        if (this._HP === 0) this._trigger(self.C3.Behaviors.FedericoCalchera_HP.Cnds.OnHpReachedZero);
    }

    heal(amount) {
        if (!this.isEnabled) return;

        this._newHP = Math.min(this._HP + amount, this._max);
        this._healingReceived = this._newHP - this._HP;
        this._healingAmount = amount;
        this._HP = this._newHP;
        this._trigger(C3.Behaviors.FedericoCalchera_HP.Cnds.Onanychange);
        this._trigger(C3.Behaviors.FedericoCalchera_HP.Cnds.Hpincreased);
    }


    _saveToJson() {
        return {
            "HP": this._HP,
            "maxHP": this._max,
            "isEnabled": thisisEnabled,
        };
    }

    _loadFromJson(o) {
        this._HP = o.HP;
        this._max = o.maxHP;
        this.isEnabled = o.isEnabled;
    }

    _getDebuggerProperties() {
        return [
            {
                title: "$HP",
                properties: [
                    {
                        name: "$Max",
                        value: this._max,
                        onedit: v => this.max = v
                    },
                    {
                        name: "$Current",
                        value: this._HP,
                        onedit: v => this.current = v
                    },

                    {
                        name: "$Enabled",
                        value: this.isEnabled,
                        onedit: v => this.isEnabled = v
                    }

                ]
            }];
    }

    // timeline support
    GetPropertyValueByIndex(index) {
        return 0;
    }

    SetPropertyValueByIndex(index, value) {
        //set property value here
    }

    GetScriptInterfaceClass() {
        return self.IMyBehaviorInstance;
    }
};



