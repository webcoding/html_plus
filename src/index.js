'use strict'

/* only for building vux.css */
// import Style from '../styles/index.vue' // eslint-disable-lin/index.vuee

// 不要全是用 index.vue 调试不好找对应文件

// import XImg from './components/x-img/index.vue'
import Box from './components/box.vue'
import Group from './components/group.vue'
import Cell from './components/cell.vue'
import Icon from './components/icon.vue'
import XButton from './components/x-button.vue'
import Divider from './components/divider.vue'
import Switch from './components/switch.vue'
import Badge from './components/badge.vue'
// import XInput from './components/x-input.vue'
// import XNumber from './components/x-number.vue'
// import XTextarea from './components/x-textarea.vue'
import XHeader from './components/x-header.vue'
import XHeaderItem from './components/x-header-item.vue'
import TreeItem from './components/tree-item.vue'
// import Panel from './components/panel.vue'
// import DevTip from './components/dev-tip/index.vue'
// import Radio from './components/radio/index.vue'
// import InlineDesc from './components/inline-desc/index.vue'
// import Checklist from './components/checklist/index.vue'
// import GroupTitle from './components/group-title/index.vue'
// import Tip from './components/tip/index.vue'
// import Selector from './components/selector/index.vue'
// import Flexbox from './components/flexbox/index.vue'
// import FlexboxItem from './components/flexbox-item/index.vue'
// import { Tab, TabItem } from './components/tab/index.vue'
// import Swiper from './components/swiper/index.vue'
// import SwiperItem from './components/swiper-item/index.vue'
// import Sticky from './components/sticky/index.vue'
// import Picker from './components/picker/index.vue'
// import Datetime from './components/datetime/index.vue'
// import Popup from './components/popup/index.vue'
// import Range from './components/range/index.vue'
// import Actionsheet from './components/actionsheet/index.vue'
// import Clocker from './components/clocker/index.vue'
// import Rater from './components/rater/index.vue'
// import PopupPicker from './components/popup-picker/index.vue'
// import Address from './components/address/index.vue'
// import Toast from './components/toast/index.vue'
// import Loading from './components/loading/index.vue'
// import Alert from './components/alert/index.vue'
// import Confirm from './components/confirm/index.vue'
// import Progress from './components/progress/index.vue'
// import Spinner from './components/spinner/index.vue'
// import Calendar from './components/calendar/index.vue'
// import Circle from './components/circle/index.vue'
// import ColorPicker from './components/color-picker/index.vue'
// import AddressChinaData from './components/address/list.json/index.vue'
// import Blur from './components/blur/index.vue'
// import Countup from './components/countup/index.vue'
// import Scroller from './components/scroller/index.vue'
// import Shake from './components/shake/index.vue'
// import WechatEmotion from './components/wechat-emotion/index.vue'
// import Search from './components/search/index.vue'
// import DateFormatter from './components/datetime/format/index.vue'
// import Masker from './components/masker/index.vue'
// import Countdown from './components/countdown/index.vue'
// import FriendlyTime from '../filters/friendly-time/index.vue'
// import Checker from './components/checker/index.vue'
// import CheckerItem from './components/checker-item/index.vue'
// import { Timeline, TimelineItem } from './components/timeline/index.vue'
// import { Step, StepItem } from './components/steps/index.vue'
// import { Tabbar, TabbarItem } from './components/tabbar/index.vue'
// import { ButtonTab, ButtonTabItem } from './components/button-tab/index.vue'
// import InlineCalendar from './components/inline-calendar/index.vue'
// import Dialog from './components/dialog/index.vue'

const HtmlPlus = {
  Box,
  Group,
  Cell,
  Icon,
  XButton,
  Divider,
  Switch,
  Badge,
  // XImg,
  // XInput,
  // XNumber,
  // XTextarea,
  XHeader,
  XHeaderItem,
  TreeItem,
  // Panel,
  // Radio,
  // DevTip,
  // GroupTitle,
  // Checklist,
  // Tip,
  // Selector,
  // InlineDesc,
  // Flexbox,
  // FlexboxItem,
  // Tab,
  // TabItem,
  // Swiper,
  // SwiperItem,
  // Sticky,
  // Picker,
  // Datetime,
  // Popup,
  // Range,
  // Actionsheet,
  // Clocker,
  // Rater,
  // PopupPicker,
  // Address,
  // Toast,
  // Loading,
  // Alert,
  // Confirm,
  // Progress,
  // Spinner,
  // Calendar,
  // Circle,
  // ColorPicker,
  // AddressChinaData,
  // Blur,
  // Countup,
  // Scroller,
  // Shake,
  // WechatEmotion,
  // Search,
  // DateFormatter,
  // Masker,
  // Countdown,
  // FriendlyTime,
  // Checker,
  // CheckerItem,
  // Timeline,
  // TimelineItem,
  // Step,
  // StepItem,
  // Tabbar,
  // TabbarItem,
  // ButtonTab,
  // ButtonTabItem,
  // InlineCalendar,
  // Dialog
}

// module.exports = HtmlPlus

// var ns = 'plus-';
var ns = '';

// import f7Textarea from './form/textarea'/index.vue;
export default {
  install( Vue ) {
    //全局注册，由于开发，先用全局注册，以后改为局部注册
    Vue.component('box', HtmlPlus.Box);
    Vue.component('group', HtmlPlus.Group);
    Vue.component('cell', HtmlPlus.Cell);
    Vue.component('icon', HtmlPlus.Icon);
    Vue.component('x-button', HtmlPlus.XButton);
    Vue.component('divider', HtmlPlus.Divider);
    Vue.component('switch', HtmlPlus.Switch);
    Vue.component('badge', HtmlPlus.Badge);
    Vue.component('x-header', HtmlPlus.XHeader);
    Vue.component('x-header-item', HtmlPlus.XHeaderItem);
    Vue.component('tree-item', HtmlPlus.TreeItem);
    // Vue.component('plus-list-block', require('./tags/list-block.vue'));
    // Vue.component('plus-panel', require('./tags/panel.vue'));
    // Vue.component('plus-page', require('./tags/page.vue'));
    // Vue.component('plus-container', require('./tags/container.vue'));
    // Vue.component('plus-navbar', require('./tags/navbar.vue'));
    // Vue.component('plus-btn', require('./tags/btn.vue'));
    // Vue.component('plus-modal', require('./tags/modal.vue'));
    //
    // Vue.component('plus-content-block', require('./tags/content-block/content-block.vue'));
    // Vue.component('plus-content-block-title', require('./tags/content-block/content-block-title.vue'));
    //
    // Vue.component('plus-views', require('./tags/views.vue'));
    // Vue.component('plus-view', require('./tags/view.vue'));
    // Vue.component('plus-pages', require('./tags/pages.vue'));
    // Vue.component('plus-page', require('./tags/page.vue'));
    // Vue.component('plus-page-content', require('./tags/page-content.vue'));
    //
    // Vue.component('plus-navbar', require('./tags/navbar.vue'));
    //
    // Vue.component('plus-toolbar', require('./tags/toolbar/toolbar.vue'));
    // Vue.component('plus-toolbar-item', require('./tags/toolbar/toolbar-item.vue'));
    //
    // Vue.component('plus-tabbar', require('./tags/tabbar/tabbar.vue'));
    // Vue.component('plus-tabbar-item', require('./tags/tabbar/tabbar-item.vue'));
    // Vue.component('plus-tabbar-label', require('./tags/tabbar/tabbar-label.vue'));
    //
    // Vue.component('plus-badge', require('./tags/badge.vue'));
    // Vue.component('plus-icon', require('./tags/icon.vue'));
    //
    // Vue.component('plus-searchbar', require('./tags/searchbar.vue'));
    //
    // Vue.component('plus-side', require('./tags/side.vue'));
    //
    // Vue.component('plus-row', require('./tags/grid/row.vue'));
    // Vue.component('plus-col', require('./tags/grid/col.vue'));
    //
    // Vue.component('plus-popup', require('./tags/popup.vue'));
    //
    // Vue.component('plus-list-block', require('./tags/list/list-block.vue'));
    // Vue.component('plus-list-group', require('./tags/list/list-group.vue'));
    // Vue.component('plus-list-group-title', require('./tags/list/list-group-title.vue'));
    // Vue.component('plus-list', require('./tags/list/list.vue'));
    // Vue.component('plus-list-label', require('./tags/list/list-label.vue'));
    // Vue.component('plus-list-item', require('./tags/list/list-item.vue'));
    // Vue.component('plus-list-divider', require('./tags/list/list-divider.vue'));
    //
    // Vue.component('plus-checkbox', require('./tags/form/form-switch.vue'));
    // Vue.component('plus-range', require('./tags/form/form-slider.vue'));
    // Vue.component('plus-checkbox-group', require('./tags/form/checkbox-group.vue'));
    // Vue.component('plus-radio-group', require('./tags/form/radio-group.vue'));
    // Vue.directive('Plus-textarea', f7Textarea );
    //
    // Vue.component('plus-button', require('./tags/buttons/button.vue'));
    // Vue.component('plus-buttons-row', require('./tags/buttons/buttons-row.vue'));
    // Vue.component('plus-list-button', require('./tags/buttons/list-button.vue'));
    //
    // Vue.component('plus-actions', require('./tags/action-sheet/actions.vue'));
    // Vue.component('plus-action-group', require('./tags/action-sheet/action-group.vue'));
    // Vue.component('plus-action-button', require('./tags/action-sheet/action-button.vue'));
    //
    // Vue.component('plus-picker', require('./tags/picker/picker.vue'));
    // Vue.component('plus-picker-inner', require('./tags/picker/picker-inner.vue'));
  }
};
