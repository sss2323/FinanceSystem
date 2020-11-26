<style lang="scss" scoped>
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.menu-item span{
    width: 100px;
}
</style>

<template>
  <Menu theme="dark" width="auto" :class="menuitemClasses">
    <MenuGroup v-for="(item,index) in menu" :key="index" :name="index">
      <!-- <template slot="title">
        <Icon :type="item.titleIcon" />
        <span>{{item.title}}</span>
      </template> -->
      <MenuItem v-for="(el,i) in item.children" :key="i" :name="index+'-'+i" :to="el.to">
        <Icon :type="item.titleIcon" />
        {{el.title}}
      </MenuItem>
    </MenuGroup>
  </Menu>
</template>

<script>
import menu from '../../temp/menuTree.js';
export default {
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menu,
    };
  },
  computed: {
    menuitemClasses() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : '',
      ];
    },
  },
};
</script>
<style>
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-group-title{
  display: none !important;
}
.ivu-col-span-2{
  width: 230px !important;
}
.ivu-dropdown-rel{
  cursor: pointer;
}
</style>
