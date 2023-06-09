import { View } from "./view.js";
export class MessageView extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
    clearMessage() {
        setTimeout(() => {
            this.element ? (this.element.innerHTML = "") : null;
        }, 3000);
    }
}
