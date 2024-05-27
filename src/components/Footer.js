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
          </form>
          <p className='footer-subscription-text'>
          • you can never unsubscribe •
        </p>
        <Button buttonStyle='btn--outline'>subscribe</Button>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>a b o u t</h2>
            <Link to='/'>education</Link>
            <Link to='/'>experience</Link>
            <Link to='/'>hobbies</Link>
            <Link to='/'>xxx</Link>
          </div>
          <div className='footer-link-items'>
            <h2>c o n t a c t</h2>
            <Link to='/'>email</Link>
            <Link to='/'>number</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>x x x</h2>
            <Link to='/'>xxx</Link>
            <Link to='/'>xxx</Link>
            <Link to='/'>xxx</Link>
            <Link to='/'>xxx</Link>
          </div>
          <div className='footer-link-items'>
            <h2>s o c i a l s</h2>
            <Link to='https://www.linkedin.com/in/lailaaleissa/' target='_blank'>l i n k e d i n</Link>
            <Link to='https://www.instagram.com/lailien.3/' target='_blank'>i n s t a g r a m</Link>
            <Link to='https://www.youtube.com/channel/UCQiLMZc0oaYF9sL0Hz3tZzQ' target='_blank'>y o u t u b e</Link>
            <Link to='https://www.facebook.com/laila.aleissa.5/' target='_blank'>f a c e b o o k</Link>
            <Link to='https://www.tiktok.com/@lailien_3' target='_blank'>t i k t o k</Link>
            <Link to='https://www.pinterest.co.uk/lailien_3/' target='_blank'>p i n t e r e s t</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              laila
            </Link>
          </div>
          <small className='website-rights'>laila © 2024</small>
          <div className='social-icons'>
          {/* ------------------------------------ */}
          <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/lailaaleissa/'
              target='_blank'
              aria-label='LinkedIn'
            >
            <i className='fab fa-linkedin' />
            </Link>
          {/* ------------------------------------ */}
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/lailien.3/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link> 
          {/* ------------------------------------ */}
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/channel/UCQiLMZc0oaYF9sL0Hz3tZzQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
          {/* ------------------------------------ */}
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/laila.aleissa.5/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
          {/* ------------------------------------ */}
            <Link
              class='social-icon-link tiktok'
              to='https://www.tiktok.com/@lailien_3'
              target='_blank'
              aria-label='Tiktok'
            >
              <i className='fab fa-tiktok' />
            </Link>
          {/* ------------------------------------ */}
            <Link
              class='social-icon-link pinterest'
              to='https://www.pinterest.co.uk/lailien_3/'
              target='_blank'
              aria-label='Pinterest'
            >
              <i className='fab fa-pinterest' />
            </Link>
          {/* ------------------------------------ */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;