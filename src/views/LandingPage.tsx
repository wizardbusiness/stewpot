import { Box } from '@mui/material';
import VisibilityManager from '../components/VisibilityManager';
import SvgStewpotLogoAnimated from '../components/svgComponents/StewpotLogo/StewPotLogoAnimated';

const LandingPage = () => {
  return (
    <VisibilityManager>
      <SvgStewpotLogoAnimated className='bubbles'/>
    </VisibilityManager>
  );
}

export default LandingPage;