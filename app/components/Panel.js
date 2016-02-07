/** @jsx element */

import { element } from 'deku';

function render({ props }) {
  return (
    <li class="col-sm-8 col-md-3">
      <div class="thumbnail">
        <a href={ props.url }><img src={ props.imgSrc } alt={ props.title } /></a>
        <div class="caption">
          <h5 style={ props.titleStyle }>{ props.title }</h5>
          {
            props.isKindlized ?
            <span class="label label-success">Kindle化されています</span> :
            <span class="label label-danger">Kindle化されてません</span>
          }
          <span class="label label-warning">Kindle化通知を解除</span>
          <a
            href={ props.url }
            target="_blank"
            class="btn btn-default btn-sm"
            style={ props.buttonStyle }
          >
            Amazonで購入する
          </a>
        </div>
      </div>
    </li>
  );
}

export default {
  render,
};
