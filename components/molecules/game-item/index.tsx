import Image from 'next/image';
import Link from 'next/link';

export interface Props {
  href?: string;
  thumbnail: string;
  title: string;
  platform: string;
}

const GameItem = (props: Props) => {
  const {href = '/detail', thumbnail, title, platform} = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href={href}>
        <a>
          <div className="blur-sharp">
            <Image
              className={'thumbnail'}
              src={thumbnail}
              width={205}
              height={270}
              alt={'thumbnail'}
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src={'/icon/icon-game.svg'}
                  width={54}
                  height={36}
                  alt={'game'}
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{platform}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default GameItem;
