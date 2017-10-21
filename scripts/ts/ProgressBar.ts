/**
 * Created by cesarmejia on 20/08/2017.
 */
module pl {

    export class ProgressBar extends Element<HTMLElement> {

        // region Static
        /**
         * @type {Array}
         */
        private static times: Array<number> = [];
        // endregion

        // region Fields
        /**
         * @type {number}
         */
        private progress: number = 31;

        /**
         * @type {Object}
         */
        private settings: Object;

        /**
         * @type {Element<HTMLElement>}
         */
        private barEl: Element<HTMLElement>;

        /**
         * @type {Element<HTMLElement>}
         */
        private numberEl: Element<HTMLElement>;

        /**
         * @type {Element<HTMLElement>}
         */
        private railEl: Element<HTMLElement>;
        // endregion

        /**
         * Create a progress bar instance.
         * @constructor
         * @param {Object} settings
         */
        constructor(settings) {
            super(document.createElement('div'));

            this.addClass('progress-bar');

            this.buildOut();
            this.update();
        }

        // region Private Methods
        /**
         * Create the needed elements for progress bar.
         */
        private buildOut() {
            // Create elements.
            this.numberEl = Element.create('div.number');
            this.railEl   = Element.create('div.rail');
            this.barEl    = Element.create('div.bar');

            // Append to progress bar element.
            this.append(this.numberEl);
            this.append(this.railEl);

            this.railEl.append(this.barEl);
        }

        /**
         * Update progress bar view.
         */
        private update() {
            let percentage = `${this.progress}%`;

            // Update number progress
            this.numberEl.text(percentage);

            // Update bar progress
            this.barEl.css('width', percentage);

        }
        // endregion

        // region Methods
        /**
         * Ends the progress.
         */
        finish() {

        }

        /**
         * Starts the progress.
         */
        start() {

        }

        /**
         * Reset the progress.
         */
        reset() {

        }
        // endregion

        // region Properties
        // endregion

    }

}