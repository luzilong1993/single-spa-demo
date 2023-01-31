// 不基于框架的微应用

let layoutContainer = null;

export async function bootstrap() {
    console.log('应用正在启动');
}
export async function mount() {
    console.log('应用正在挂载');
    layoutContainer = document.createElement('div');
    layoutContainer.id = 'layoutContainer';
    layoutContainer.innerHTML = 'hello layout';
    document.body.appendChild(layoutContainer)
}
export async function unmount() {
    console.log('应用正在卸载');
    document.body.removeChild(layoutContainer)
}
