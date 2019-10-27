import { Transition } from 'react-spring/renderprops';
import { BillboardVideo } from './Headings';

const VideoBillboard = ({ location }) => {
  const isHome = location.pathname === '/';
  return (
    <Transition items={isHome} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
      {isHome => isHome
        && (props => (
          <div style={props} key="billboard">
            <BillboardVideo>
              <source src='https://digital-reactor.s3.amazonaws.com/background.mp4' type="video/mp4" />
            </BillboardVideo>
          </div>
        ))
      }
    </Transition>
  );
};

export default VideoBillboard;