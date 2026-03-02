<script setup lang="ts">
interface FooterLink {
  id: number
  text: string
  href: string
}

interface SocialLink {
  id: number
  name: string
  href: string
  icon: string
}

interface Props {
  logoSrc?: string
  logoAlt?: string
  links?: FooterLink[]
  socialLinks?: SocialLink[]
  copyright?: string
}

const props = withDefaults(defineProps<Props>(), {
  logoSrc: '/images/logo.svg',
  logoAlt: 'Logo',
  links: () => [
    { id: 1, text: 'Contact', href: '#' },
    { id: 2, text: 'About us', href: '#' },
    { id: 3, text: "FAQ's", href: '#' },
    { id: 4, text: 'Support', href: '#' },
  ],
  socialLinks: () => [
    {
      id: 1,
      name: 'Facebook',
      href: '#',
      icon: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7"/></svg>',
    },
    {
      id: 2,
      name: 'Twitter',
      href: '#',
      icon: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7"/></svg>',
    },
    {
      id: 3,
      name: 'Google',
      href: '#',
      icon: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7"/></svg>',
    },
  ],
  copyright: '2019 Solid, all rights reserved',
})
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer-inner">
        <div class="brand footer-brand">
          <a href="#">
            <img class="footer-logo-image" :src="props.logoSrc" :alt="props.logoAlt" />
          </a>
        </div>
        <ul class="footer-links list-reset">
          <li v-for="link in props.links" :key="link.id">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
        <ul class="footer-social-links list-reset">
          <li v-for="social in props.socialLinks" :key="social.id">
            <a :href="social.href">
              <span class="screen-reader-text">{{ social.name }}</span>
              <span v-html="social.icon"></span>
            </a>
          </li>
        </ul>
        <div class="footer-copyright">&copy; {{ props.copyright }}</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  letter-spacing: -0.1px;
}

.site-footer a {
  color: var(--color-text-2);
  text-decoration: none;
}

.site-footer a:hover,
.site-footer a:active {
  color: var(--color-text-1);
}

.site-footer-inner {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 48px;
  padding-bottom: 48px;
}

.footer-brand,
.footer-links,
.footer-social-links,
.footer-copyright {
  flex: none;
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

.footer-brand,
.footer-links,
.footer-social-links {
  margin-bottom: 24px;
}

.footer-links li + li,
.footer-social-links li + li {
  margin-left: 16px;
}

.footer-social-links li {
  display: inline-flex;
}

.footer-social-links li a {
  padding: 8px;
}

.list-reset {
  list-style: none;
  padding: 0;
  margin: 0;
}

.screen-reader-text {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@media (min-width: 641px) {
  .site-footer-inner {
    justify-content: space-between;
    padding-top: 72px;
    padding-bottom: 72px;
  }

  .footer-brand,
  .footer-links,
  .footer-social-links,
  .footer-copyright {
    flex: 50%;
  }

  .footer-brand,
  .footer-copyright {
    justify-content: flex-start;
  }

  .footer-links,
  .footer-social-links {
    justify-content: flex-end;
  }

  .footer-links {
    order: 1;
    margin-bottom: 0;
  }
}
</style>
