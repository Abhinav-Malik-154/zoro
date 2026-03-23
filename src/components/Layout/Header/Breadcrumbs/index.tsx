/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/translation';
import { getVTokenByAddress } from '@/utilities';
import addTokenToWallet, {
  canRegisterToken,
} from '@/clients/web3/addTokenToWallet';
import { IRoute, Subdirectory, routes } from '@/constants/routing';
import { useAuth } from '@/context/AuthContext';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { TertiaryButton } from '../../../Button';
import { Icon } from '../../../Icon';
import PoolName from './PoolName';
import { useStyles } from './styles';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

export interface PathNode {
  dom: React.ReactNode;
  href: string;
}

const Breadcrumbs: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const params = useParams();
  const { accountAddress } = useAuth();
  const styles = useStyles();
  const copyToClipboard = useCopyToClipboard(
    t('interactive.copy.walletAddress')
  );

  const pathNodes = useMemo(() => {
    let href = '';
    let activeRoute: IRoute | null = null;

    if (pathname === routes.dashboard.path) {
      activeRoute = routes.dashboard;
    }

    if (pathname === routes.account.path) {
      activeRoute = routes.account;
    }

    if (
      params?.poolComptrollerAddress &&
      pathname ===
        routes.markets.path.replace(
          ':poolComptrollerAddress',
          params.poolComptrollerAddress as string
        )
    ) {
      activeRoute = routes.markets;
    }

    if (
      params?.poolComptrollerAddress &&
      params?.vTokenAddress &&
      pathname ===
        routes.market.path
          .replace(
            ':poolComptrollerAddress',
            params.poolComptrollerAddress as string
          )
          .replace(':vTokenAddress', params.vTokenAddress as string)
    ) {
      activeRoute = routes.market;
    }

    if (!activeRoute) return [];

    return activeRoute.subdirectories.reduce<PathNode[]>(
      (acc, subdirectory) => {
        let dom: React.ReactNode;
        let hrefFragment: string = subdirectory;

        switch (subdirectory) {
          case Subdirectory.DASHBOARD:
            dom = t('breadcrumbs.dashboard');
            break;
          case Subdirectory.ACCOUNT:
            dom = t('breadcrumbs.account');
            break;
          case Subdirectory.MARKETS:
            hrefFragment = Subdirectory.MARKETS.replace(
              ':poolComptrollerAddress',
              params?.poolComptrollerAddress as string
            );

            dom = t('breadcrumbs.markets');
            break;
          case Subdirectory.POOLS:
            dom = t('breadcrumbs.pools');
            break;
          case Subdirectory.POOL:
            hrefFragment = Subdirectory.POOL.replace(
              ':poolComptrollerAddress',
              params?.poolComptrollerAddress as string
            );

            dom = (
              <PoolName
                poolComptrollerAddress={
                  params?.poolComptrollerAddress as string
                }
              />
            );
            break;
          case Subdirectory.MARKET:
            {
              hrefFragment = Subdirectory.MARKET.replace(
                ':vTokenAddress',
                params?.vTokenAddress as string
              );

              const vToken = getVTokenByAddress(
                params?.vTokenAddress as string
              );

              if (vToken) {
                dom = (
                  <div css={styles.tokenSymbol}>
                    <span>{vToken.underlyingToken.symbol}</span>

                    {!!accountAddress && canRegisterToken() && (
                      <TertiaryButton
                        css={styles.addTokenButton}
                        onClick={() => addTokenToWallet(vToken.underlyingToken)}
                      >
                        <Icon name='wallet' css={styles.walletIcon} />
                      </TertiaryButton>
                    )}
                  </div>
                );
              }
              break;
            }
            // case Subdirectory.GOVERNANCE:
            //   dom = t('breadcrumbs.governance');
            //   break;
            // case Subdirectory.PROPOSAL:
            //   dom = t('breadcrumbs.proposal', { proposalId: params.proposalId });
            //   break;
            // case Subdirectory.LEADER_BOARD:
            //   dom = t('breadcrumbs.leaderboard');
            //   break;
            // case Subdirectory.VOTER:
            //   hrefFragment = Subdirectory.VOTER.replace(
            //     ':address',
            //     params.address
            //   );

            //   dom = (
            //     <div css={styles.address}>
            //       <Typography variant='h3' color='textPrimary'>
            //         <EllipseAddress address={params.address} />
            //       </Typography>

            //       <Icon
            //         name='copy'
            //         css={styles.copyIcon}
            //         onClick={() => copyToClipboard(params.address)}
            //       />
            //     </div>
            //   );
            //   break;
            // case Subdirectory.VAULTS:
            //   dom = t('breadcrumbs.vaults');
            //   break;
            // case Subdirectory.HISTORY:
            //   dom = t('breadcrumbs.history');
            //   break;
            // case Subdirectory.XVS:
            //   dom = t('breadcrumbs.xvs');
            //   break;
            // case Subdirectory.CONVERT_VRT:
            //   dom = t('breadcrumbs.convertVrt');
            //   break;
            // case Subdirectory.SWAP:
            //   dom = t('breadcrumbs.swap');
            //   break;
            // case Subdirectory.VAI:
            //   dom = t('breadcrumbs.vai');
            break;
          default:
            break;
        }

        href += hrefFragment;

        return dom
          ? [
              ...acc,
              {
                href,
                dom,
              },
            ]
          : acc;
      },
      []
    );
  }, [pathname, t, !!accountAddress]);

  const pathNodeDom = useMemo(
    () =>
      pathNodes.map((pathNode, index) => (
        <span
          key={`layout-header-breadcrumb-${pathNode.href}`}
          css={styles.pathNode}
        >
          {pathNodes.length > 0 && index < pathNodes.length - 1 ? (
            <>
              <Link css={styles.link} href={pathNode.href}>
                {pathNode.dom}
              </Link>
              <span css={styles.separator}>/</span>
            </>
          ) : (
            pathNode.dom
          )}
        </span>
      )),
    [pathNodes]
  );

  return (
    <Typography component='h1' variant='h3' css={styles.container}>
      {pathNodeDom}
    </Typography>
  );
};

export default Breadcrumbs;
