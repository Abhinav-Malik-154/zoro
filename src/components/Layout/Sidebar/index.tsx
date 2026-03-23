/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Icon } from '../../Icon';
//import ClaimRewardButton from '../ClaimRewardButton';
import ConnectButton from '../ConnectButton';
import { Toolbar } from '../Toolbar';
import { LinkComponent } from './LinkComponent';
import { useStyles } from './styles';
import useGetMenuItems from './useGetMenuItems';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import { Typography } from '@mui/material';
import LogoMobile from '@/assets/img/Logo-01.svg';
import LogoDesktop from '@/assets/img/Logo-02.svg';
import React, { useState } from 'react';
import { useTranslation } from '@/translation';

export const SidebarUi: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();
  const styles = useStyles();
  const menuItems = useGetMenuItems();

  const openMenu = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Desktop and tablet menu */}
      <Drawer
        variant='permanent'
        css={styles.drawer}
        className='custom-sidebar-wrap'
      >
        <div
          css={styles.drawerContent as any}
          className='sidebar-menu-logo-option-list-wrap'
        >
          <Toolbar css={styles.toolbar} className='sidebar-logo'>
            <LogoDesktop css={styles.logo} />
            <LogoMobile css={styles.logoClosed} />
          </Toolbar>
          <List>
            {menuItems.map((menuItem) => {
              return (
                <ListItemButton
                  key={menuItem.i18nKey}
                  component='li'
                  css={styles.listItem}
                  disableRipple
                >
                  <LinkComponent href={menuItem.href} target={menuItem?.target}>
                    <div className='left-border' />

                    <ListItemIcon css={styles.listItemIcon}>
                      {menuItem?.svgIcon ? (
                        menuItem?.svgIcon
                      ) : (
                        <Icon name={menuItem.icon as any} />
                      )}
                    </ListItemIcon>

                    <Typography variant='body2' css={styles.listItemText}>
                      {t(menuItem.i18nKey)}
                    </Typography>

                    {menuItem.isNew && (
                      <div css={styles.listItemNewBadge}>
                        <Typography
                          variant='tiny'
                          css={styles.listItemNewBadgeText}
                        >
                          {t('sidebar.newBadge')}
                        </Typography>
                      </div>
                    )}
                  </LinkComponent>
                </ListItemButton>
              );
            })}
          </List>
        </div>
      </Drawer>

      {/* Mobile menu */}
      <div css={styles.mobileMenuBox as any}>
        <div css={styles.flexRow as any}>
          <Icon name='logoMobile' css={styles.mobileLogo} />

          <ConnectButton
            fullWidth
            css={styles.mobileConnectButton}
            className='custom-btn-wrap'
          />

          <button
            id='mobile_burger'
            title='Burger Menu'
            type='button'
            onClick={openMenu}
            css={styles.actionButton}
          >
            <Icon name='burger' css={styles.burger} />
          </button>
        </div>

        <Menu
          css={styles.mobileMenu as any}
          className='mobile-menu'
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={closeMenu}
          transitionDuration={0}
          marginThreshold={0}
          TransitionProps={{ style: { transition: 'background 0.2s linear' } }}
          anchorReference='anchorPosition'
          anchorPosition={{ top: 0, left: 0 }}
        >
          <div css={[styles.flexRow as any, styles.doublePadding]}>
            <Icon name='logoMobile' css={styles.mobileLogo} />

            <ConnectButton
              fullWidth
              css={styles.mobileConnectButton}
              className='custom-btn-wrap'
            />

            <button type='button' onClick={closeMenu} css={styles.actionButton}>
              <Icon name='closeRounded' css={styles.burger} />
            </button>
          </div>

          <List>
            {menuItems.map(
              ({ href, icon, i18nKey, isNew, svgIcon, target }) => (
                <ListItemButton
                  key={i18nKey}
                  component='li'
                  css={[styles.listItem, styles.mobileListItem as any]}
                  disableRipple
                >
                  <LinkComponent
                    onClick={closeMenu}
                    href={href}
                    target={target}
                  >
                    <div css={styles.mobileLabel as any}>
                      <ListItemIcon css={styles.listItemIcon}>
                        {svgIcon ? svgIcon : <Icon name={icon as any} />}
                      </ListItemIcon>

                      <Typography
                        variant='body2'
                        component='span'
                        css={[styles.listItemText, styles.mobileListItemText]}
                      >
                        {t(i18nKey)}
                      </Typography>

                      {isNew && (
                        <div css={styles.listItemNewBadge}>
                          <Typography
                            variant='tiny'
                            css={styles.listItemNewBadgeText}
                          >
                            {t('sidebar.newBadge')}
                          </Typography>
                        </div>
                      )}
                    </div>

                    <Icon name='arrowRight' css={styles.mobileArrow} />
                  </LinkComponent>
                </ListItemButton>
              )
            )}
          </List>

          {/*<ClaimRewardButton css={styles.claimRewardButton} />*/}
        </Menu>
      </div>
    </>
  );
};

export default SidebarUi;
