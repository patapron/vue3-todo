/* eslint-disable prettier/prettier */
import  CompletedView from "@/views/CompletedView.vue";
import { shallowMount } from "@vue/test-utils";

// import { MODULE_CODE } from '../../../config/';

describe("CompletedView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CompletedView, {
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
