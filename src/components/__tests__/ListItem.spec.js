/* eslint-disable prettier/prettier */
import ListItem from "@/components/ListItem.vue";
import { shallowMount } from "@vue/test-utils";

// import { MODULE_CODE } from '../../../config/';

describe("List", () => {
  let wrapper;
  let element;

  beforeEach(() => {
    element = { id: 1, name: "test", completed: false };
    wrapper = shallowMount(ListItem, {
      mocks: {
        $t: () => "Test text",
        $can: () => true,
      },
      propsData: {
        element,
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("module name", () => {
    expect(wrapper.vm.props.element.name).toEqual("test");
  });
});
