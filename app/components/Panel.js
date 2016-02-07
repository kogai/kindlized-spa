/** @jsx element */

import { element } from 'deku';

function render({ props }) {
  return (
    <li class="col-sm-8 col-md-3" style= { props.pannelStyle }>
      <div class="thumbnail">
        <a href={ props.url } target="_blank">
          <img src={ props.imgSrc } alt={ props.title } />
        </a>
        <div class="caption">
          <h5 style={ props.titleStyle }>{ props.title }</h5>
          {
            props.isKindlized ?
            <span class="label label-success">kindle化されています</span> :
            <span class="label label-danger">kindle化されていません</span>
          }
          <a
            href={ props.url }
            target="_blank"
            class="btn btn-default btn-sm"
            style={ props.buttonStyle }
          >
            Amazonで購入する
          </a>
          <button class="btn btn-warning btn-xs">通知を解除</button>
        </div>
      </div>
    </li>
  );
}

export default {
  render,
};
