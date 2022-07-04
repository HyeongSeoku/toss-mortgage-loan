export interface AddressTreeNode {
  name: string;
  children?: AddressTreeNode[];
  propertyType?: '아파트';
}

const 코어시: AddressTreeNode = {
  name: '코어시',
  children: [
    {
      name: '송금동',
      children: [
        { name: '토스아파트 1001동', propertyType: '아파트' },
        { name: '토스아파트 1002동', propertyType: '아파트' },
        { name: '토스아파트 1003동', propertyType: '아파트' },
        { name: '토스아파트 1004동', propertyType: '아파트' },
        { name: '토스아파트 1101동', propertyType: '아파트' },
        { name: '토스아파트 1102동', propertyType: '아파트' },
        { name: '아이디송금 아파트', propertyType: '아파트' },
      ],
    },
    {
      name: '혜택구',
      children: [
        {
          name: '만보기동',
          children: [
            { name: '걷기 아파트', propertyType: '아파트' },
            { name: '달리기 아파트', propertyType: '아파트' },
          ],
        },
        {
          name: '토스프라임동',
          children: [],
        },
      ],
    },
    {
      name: '소비구',
      children: [
        {
          name: '소비분석동',
          children: [{ name: '내소비아파트', propertyType: '아파트' }],
        },
        { name: '소비내역동', children: [{ name: '저번달내역아파트', propertyType: '아파트' }] },
      ],
    },
    {
      name: '카드구',
      children: [],
    },
    {
      name: '신용점수구',
      children: [],
    },
    {
      name: '자동차구',
      children: [],
    },
    {
      name: '부동산구',
      children: [{ name: '내아파트관리비아파트', propertyType: '아파트' }],
    },
    {
      name: '토스주민센터구',
      children: [{ name: '생활요금세금내기파트', propertyType: '아파트' }],
    },
    {
      name: '생활구',
      children: [],
    },
    {
      name: '사장님동',
      children: [],
    },
  ],
};

const 뱅크시: AddressTreeNode = {
  name: '뱅크시',
  children: [
    {
      name: '대출동',
      children: [
        { name: '대출받기', propertyType: '아파트' },
        { name: '주택담보대출찾기', propertyType: '아파트' },
        { name: '대출이자계산기', propertyType: '아파트' },
        { name: '아파트대출한도계산기', propertyType: '아파트' },
      ],
    },
    { name: '토스뱅크카드동' },
    { name: '토스뱅크통장동' },
    { name: '돈모으기동' },
  ],
};

const 증권시: AddressTreeNode = {
  name: '증권시',
  children: [
    { name: '토스증권계좌군', children: [{ name: '계좌연결하기동' }] },
    { name: '관심군', children: [{ name: '주식동' }, { name: '뉴스동' }] },
    {
      name: '나에게맞는해외주식찾기군',
      children: [
        { name: '배당주식보기 아파트', propertyType: '아파트' },
        { name: '가격별로빠르게찾기 아파트', propertyType: '아파트' },
        { name: '1년수익률비교하기 아파트', propertyType: '아파트' },
        { name: '해외ETF보기 아파트', propertyType: '아파트' },
        { name: '유명투자자들의주식보기 아파트', propertyType: '아파트' },
      ],
    },
    {
      name: '투자는이렇게군',
      children: [],
    },
  ],
};

export const addressTrees = [코어시, 뱅크시, 증권시];
