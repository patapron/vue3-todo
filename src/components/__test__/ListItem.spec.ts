import { shallowMount } from '@vue/test-utils';
import { ListItem } from '@/components';


// import { MODULE_CODE } from '../../../config/';



describe('RelationsView', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(ListItem, {
      mocks: {
        $t: () => 'Test text',
        $can: () => true
      }
    });
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

//   it('module name', () => {
//     expect(wrapper.vm.moduleName).toEqual(MODULE_CODE);
//   });
});
