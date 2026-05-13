"use strict";
{
    self.C3.Behaviors.FedericoCalchera_HP.Cnds = {
        Hpincreased() {
            return true
        },

        Hplost() {
            return true
        },

        OnHpReachedZero() {
            return true
        },

        Onanychange() {
            return true
        },

        IsEnabled() {
            return this.isEnabled
        },

        CompareHp(comparison, comparisonvalue) {
            return C3.compare(this._HP, comparison, comparisonvalue)
        }
    };
}