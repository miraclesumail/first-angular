import {
  Directive,  // 创建一个指令必须依赖这个装饰器
  ElementRef, // 获取原生dom的
  Input, // 接收外部数据的
  Renderer2, // 渲染相关的(v4+)，angular2.x 用的是Renderer(v4里面依旧标记不赞成deprecate),两者大同小异，具体看手册API的变动
  HostListener, // 监听事件
} from '@angular/core';

@Directive({
  selector: '[appHoverText]',
})
export class HoverTextDirective {
  @Input() private appHoverText: any;
  public div: HTMLDivElement;


  constructor(
    private el: ElementRef,
    private r2: Renderer2
  ) {
    this.el.nativeElement.style.position = 'relative';
  }

  // 创建元素
  CreateEl(show?: string, content?: any) {
    this.div = this.r2.createElement('div');

    // 往当前指令绑定的元素添加一个div的子元素
    this.r2.appendChild(this.el.nativeElement, this.div);

    // 设置div相关的样式
    this.r2.setStyle(this.div, 'position', 'absolute');
    this.r2.setStyle(this.div, 'top', '60%');
    this.r2.setStyle(this.div, 'left', '30%');
    this.r2.setStyle(this.div, 'padding', '10px');
    this.r2.setStyle(this.div, 'color', '#f5f5f5');
    this.r2.setStyle(this.div, 'cursor', 'pointer');
    this.r2.setStyle(this.div, 'background-color', 'rgba(0,0,0,.35)');
    this.r2.setStyle(this.div, 'border-radius', '10px');
    this.r2.setStyle(this.div, 'display', 'none');
    this.r2.addClass(this.div, 'createHoverDiv');



    if (show) {
      // 判断内容若是为url
      if (content && content.type === 'url') {
        // 创建一个a标签
        const a = this.r2.createElement('a');

        // 设置相关的样式和属性
        this.r2.setStyle(a, 'color', '#fff');
        this.r2.setAttribute(a, 'target', '_blank');
        this.r2.setAttribute(a, 'href', content.data);
        a.innerText = content.data;

        // 追加到div里面
        this.r2.appendChild(this.div, a);

      }

      // 控制悬浮隐藏
      this.r2.setStyle(this.div, 'display', show);
    }

  }

  // 判断内容类型
  CheckContentType(e) {

    // url判断正则
    const urlRegex: any = /^(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/;
    console.log(urlRegex.test(e));
      this.CreateEl('block', { data: e, type: 'url' });
    
  }



  // 事件 ，参数 ，对应的方法
  @HostListener('mouseenter', ['this.appHoverText']) mymouseenter(e) {
    this.CheckContentType(e);
  }

  @HostListener('mouseleave') mymouseleave() {
    this.r2.removeChild(this.el.nativeElement, this.div);
  }


}