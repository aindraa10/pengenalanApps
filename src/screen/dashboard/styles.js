import { Ratio } from '../../helper';
import { color } from '../../constants';

const styles = {
  container: {
    marginHorizontal: 20,
    backgroundColor: 'red',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    height: Ratio.screenHeight / 6,
    backgroundColor: color.white,
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
};

export default styles;
