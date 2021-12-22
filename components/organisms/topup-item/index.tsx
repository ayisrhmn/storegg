import Image from 'next/image';

interface Props {
  type: 'desktop' | 'mobile';
  gameName: string;
  thumbnail: string;
  category: string;
}

const TopUpItem = (props: Props) => {
  const {type, gameName, thumbnail, category} = props;

  const URL_IMAGE = process.env.NEXT_PUBLIC_IMG;

  return (
    <>
      {type === 'desktop' ? (
        <div className="row align-items-center">
          <div className="col-md-12 col-4">
            <Image
              src={`${URL_IMAGE}/${thumbnail}`}
              width={280}
              height={380}
              className={'img-fluid'}
              alt={'thumbnail'}
            />
          </div>
          <div className="col-md-12 col-8 d-md-none d-block">
            <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
              {gameName}
            </h2>
            <p className="text-sm color-palette-2 text-start mb-0">
              Category: {category}
            </p>
          </div>
        </div>
      ) : (
        <div className="pb-50 d-md-block d-none">
          <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
            {gameName}
          </h2>
          <p className="text-lg color-palette-2 mb-0">Category: {category}</p>
        </div>
      )}
    </>
  );
};

export default TopUpItem;
