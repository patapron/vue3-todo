/* eslint-disable prettier/prettier */
import  ActiveView from "@/views/ActiveView.vue";
import { shallowMount } from "@vue/test-utils";

// import { MODULE_CODE } from '../../../config/';

describe("ActiveView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ActiveView, {
      mocks: {
        $t: () => "Test text",
        $can: () => true,
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  //   it('module name', () => {
  //     expect(wrapper.vm.moduleName).toEqual(MODULE_CODE);
  //   });
});
