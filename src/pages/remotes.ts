import { http } from 'pages/http';
import qs from 'qs';

// 지역 API
// 요청과 응답 타입은 함수의 입출력 타입을 확인해주세요.
export function getRegions() {
  return http.get<GetRegions>('/api/regions');
}
// 고객 정보 API
// 요청과 응답 타입은 함수의 입출력 타입을 확인해주세요.
export function getMe() {
  return http.get<GetMe>('/api/me');
}
// 대출 조회 API
// 요청과 응답 타입은 함수의 입출력 타입을 확인해주세요.
export function inquiryLoan(data: { propertyType: '주택/빌라' | '아파트'; address: string[] }) {
  return http.post<any, InquiryLoan>('/api/loan-inquiry', data);
}
// 대출 조회 진행 확인 API
// 요청과 응답 타입은 함수의 입출력 타입을 확인해주세요.
export function getLoanInquiryProgress(transactionId: string) {
  return http.get<GetLoanInquiryProgress>(
    `/api/loan-inquiry/progress${qs.stringify({ transactionId }, { addQueryPrefix: true })}`
  );
}
// 대출 조회 결과 API
// 요청과 응답 타입은 함수의 입출력 타입을 확인해주세요.
export function getLoanInquiryResult(transactionId: string) {
  return http.get<GetLoanInquiryResult>(
    `/api/loan-inquiry/result${qs.stringify({ transactionId }, { addQueryPrefix: true })}`
  );
}

export interface GetAptAddresses {
  /*
   * 예)
   * rootRegions[0] = {
   *   name: '코어시',
   *   children: [
   *     {
   *       name: '송금동',
   *       children: [
   *         { name: '토스아파트 1001동', propertyType: '아파트' },
   *       ]
   *     },
   *  ]
   * }
   */
  rootRegions: AptAddressTreeNode[];
}
export type AptAddressTreeNode =
  // 최상위 노드 혹은 중간 노드
  | {
      name: string; // 시군구, 읍면동 등 지역명
      children?: AptAddressTreeNode[];
    }
  // 마지막 노드
  | {
      name: string; // 아파트명
      propertyType: '아파트';
    };

export interface GetRegions {
  /*
   * 예)
   * rootRegions[0] = {
   *   name: '코어시',
   *   children: [
   *     {
   *       name: '송금동',
   *     },
   *  ]
   * }
   */
  rootRegions?: RegionTreeNode[];
}
export interface RegionTreeNode {
  name: string; // 시군구, 읍면동 등 지역명
  children?: RegionTreeNode[];
}

export interface GetMe {
  name: string;
}

export interface InquiryLoan {
  transactionId: string;
}
export interface GetLoanInquiryProgress {
  progress: 'idle' | 'in_progress' | 'complete';
}

export interface GetLoanInquiryResult {
  loanLimitAmount: number; // 1000은 1000원을 의미
  interestRate1000: number; // 1000은 100.0%를 의미
}
