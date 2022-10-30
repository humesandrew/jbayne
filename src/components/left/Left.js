import Typography from '@mui/material/Typography';

import './left.scss';

function Left() {
    return (
      <div className="left">
      <div className='contact'>
<Typography variant="h4" > Contact Info </Typography>
</div>
<a href="javascript:void();" class="btn btn--gradient btn--xlrg"><span class="btn__text">Resume</span></a>
<a href="javascript:void();" class="btn btn--gradient btn--xlrg"><span class="btn__text">Email</span></a>
<a href="javascript:void();" class="btn btn--gradient btn--xlrg"><span class="btn__text">LinkedIn</span></a>
<a href="javascript:void();" class="btn btn--gradient btn--xlrg"><span class="btn__text">Facebook</span></a>
<p>Phone: 614-934-3435</p>
<p>humes.andre@gmail.com</p>
     
      </div>
    );
  }

  export default Left