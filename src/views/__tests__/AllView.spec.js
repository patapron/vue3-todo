/* eslint-disable prettier/prettier */
import  AllView from "@/views/AllView.vue";
import { shallowMount } from "@vue/test-utils";

// import { MODULE_CODE } from '../../../config/';

describe("AllView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AllView, {
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
