"use strict";
{
    self.C3.Behaviors.FedericoCalchera_HP.Acts = {
        healHP(amount) {
            this.heal(amount)
        },

        setMaxHP(amount) {
            this._max = amount
        },

        loseHP(amount) {
            this.damage(amount)
        },

        setEnabled(enable) {
            if (enable === 0) this.isEnabled = true;

            if (enable === 1) this.isEnabled = false;

            if (enable === 2) this.isEnabled = !this.isEnabled
        },

        SetHp(amount, runtriggers) {
            if (!runtriggers) {
                this.current = amount
            }

            else {
                let difference = amount - this._HP;

                if (difference > 0) this.heal(Math.abs(difference))

                else this.damage(Math.abs(difference))
            }
        }
    };
}