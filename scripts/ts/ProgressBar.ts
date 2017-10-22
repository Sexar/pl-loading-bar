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

        /**
         * Generate random number between a range.
         * @param {number} min
         * @param {number} max
         * @returns {number}
         */
        static getRangeRandom(min: number, max: number): number {
            return Math.floor( Math.random() * (max - min + 1) ) + min;
        }

        // endregion

        // region Fields
        /**
         * @type {number}
         */
        private progress: number = 0;

        /**
         * @type {number}
         */
        private interval: number;

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
        // endregion

        // region Methods
        /**
         * Ends the progress.
         */
        finish() {
            this.progress = 100;
            this.update();

            clearInterval(this.interval);
        }

        /**
         * Reset the progress.
         */
        reset() {
            this.progress = 0;
            this.update();

            clearInterval(this.interval);
        }

        /**
         * Starts the progress.
         */
        start() {
            let delay = 750;

            this.progress = ProgressBar.getRangeRandom(40, 70);
            this.update();

            this.interval = setInterval(() => {
                if (this.progress >= 92) { clearInterval(this.interval); }

                this.progress += ProgressBar.getRangeRandom(1, 5);
                this.update();
            }, delay);
        }

        /**
         * Update progress bar view.
         */
        update() {
            let percentage = `${this.progress}%`;

            // Update number progress
            this.numberEl.text(percentage);

            // Update bar progress
            this.barEl.css('width', percentage);

        }
        // endregion

        // region Properties
        // endregion

    }

}