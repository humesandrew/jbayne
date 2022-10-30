import Typography from '@mui/material/Typography';

import './left.scss';

function Left() {
    return (
      <div className="left">
      <div className='contact'>
<Typography variant="h4" > Regional Director of Operations </Typography>
<Typography variant="h6" > Denver, CO </Typography>
</div>
<a href="javascript:void();" class="btn btn--gradient btn--xlrg"><span class="btn__text">Resume</span></a>
<a href="mailto:jbayne@gmail.com" class="btn btn--gradient btn--xlrg" target="_blank" title="email"><span class="btn__text">Email</span></a>
<a href="https://www.linkedin.com/in/jackie-bayne-bs-coa-155b20174/" class="btn btn--gradient btn--xlrg" target="_blank" title="linkedin"><span class="btn__text">LinkedIn</span></a>
<a href="javascript:void();" class="btn btn--gradient btn--xlrg"><span class="btn__text">Facebook</span></a>
<p>Phone: 614-934-3435</p>
humes.andre@gmail.com
     
      </div>
    );
  }

  export default Left