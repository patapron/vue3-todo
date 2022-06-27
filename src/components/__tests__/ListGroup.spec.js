/* eslint-disable prettier/prettier */
import ListGroup from "@/components/ListGroup.vue";
import { shallowMount } from "@vue/test-utils";

describe("List", () => {
  let wrapper;
  let list;
  let name;

  beforeEach(() => {
    list = [];
    name = 'Active';
    wrapper = shallowMount(ListGroup, {
      mocks: {
        $t: () => "Test text",
        $can: () => true,
      },
      propsData: {
        list,
        name,
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("module name", () => {
    expect(wrapper.vm.props.name).toEqual("Active");
  });

  //   it('module name', () => {
  //     expect(wrapper.vm.moduleName).toEqual(MODULE_CODE);
  //   });
});
