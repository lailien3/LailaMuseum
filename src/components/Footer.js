import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          • join my newsletter for weekly cat pics •
        </p>
        <p className='footer-subscription-text'>
          • you can never unsubscribe •
        </p>
        <div className='input-areas'>
          <form>
          <input
              className='footer-input'
              name='name'
              type='name'
              placeholder='Your Name'
              style={{ height: '2rem' }}
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              style={{ height: '2rem' }}
            />
            <Button buttonStyle='btn--outline'>subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>a b o u t</h2>
            <Link to='/sign-up'>education</Link>
            <Link to='/'>experience</Link>
            <Link to='/'>hobbies</Link>
            <Link to='/'>xxx</Link>
          </div>
          <div class='footer-link-items'>
            <h2>c o n t a c t</h2>
            <Link to='/'>email</Link>
            <Link to='/'>number</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>x x x</h2>
            <Link to='/'>xxx</Link>
            <Link to='/'>xxx</Link>
            <Link to='/'>xxx</Link>
            <Link to='/'>xxx</Link>
          </div>
          <div class='footer-link-items'>
            <h2>s o c i a l s</h2>
            <Link to='https://www.linkedin.com/in/lailaaleissa/' target='_blank'>linkedin</Link>
            <Link to='https://www.instagram.com/lailien.3/' target='_blank'>instagram</Link>
            <Link to='https://www.youtube.com/channel/UCQiLMZc0oaYF9sL0Hz3tZzQ' target='_blank'>youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              laila
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>laila © 2023</small>
          <div class='social-icons'>
          <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/lailaaleissa/'
              target='_blank'
              aria-label='LinkedIn'
            >
            <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>  
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/channel/UCQiLMZc0oaYF9sL0Hz3tZzQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
   
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;