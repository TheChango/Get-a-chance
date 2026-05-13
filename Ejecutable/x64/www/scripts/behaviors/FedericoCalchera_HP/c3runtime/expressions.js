"use strict";
{
    self.C3.Behaviors.FedericoCalchera_HP.Exps = {
        Max() {
            return this._max
        },

        Current() {
            return this._HP
        },

        DamageReceived() {
            return this._damageReceived
        },

        HealingAmount() {
            return this._healingAmount
        },

        DamageAmount() {
            return this._damageAmount
        },

        HealingReceived() {
            return this._healingReceived
        },

        NormalizedCurrent() {
            return this.normalizedCurrent
        }
    };
}