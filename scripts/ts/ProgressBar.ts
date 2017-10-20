/**
 * Created by cesarmejia on 20/08/2017.
 */
module pl {

    export class ProgressBar {

        // region Fields
        /**
         * @type {number}
         */
        private progress: number = 0;

        /**
         * @type {null}
         * @private
         */
        private _elem: Element<HTMLElement> = null;

        // endregion

        constructor() {

        }

        // region Private Methods
        private buildOut() {

        }
        // endregion

        // region Properties
        /**
         * Get element property.
         * @returns {Element<HTMLElement>}
         */
        get elem(): Element<HTMLElement> {
            if (!this._elem) {
                this._elem = Element.create('div');

                this._elem.addClass('progress-bar');
            }

            return this._elem;
        }
        // endregion

    }

}