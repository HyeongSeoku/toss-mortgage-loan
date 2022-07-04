import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { server } from '_tosslib/server/node';
import App from './App';
import * as remotes from 'pages/remotes';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
});
afterAll(() => {
  server.close();
});

describe('App', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  // 이 테스트는 무시해주세요. boilerplate 상태에서만 동작하는 테스트입니다.
  test.skip('boilerplate: 시작 - 주택 종류 선택 - 지역 선택 - 입력 확인 - 조회 대기 - 완료', async () => {
    renderWithRouter(<App />, { route: '/start' });

    await screen.findByText(/토스 프론트엔드 기술과제를 시작할게요/);
    await userEvent.click(screen.getByRole('button', { name: /기술과제 시작/ }));

    await screen.findByText(/주택의 종류를 선택해주세요/);
    await userEvent.click(screen.getByLabelText(/아파트/));
    await userEvent.click(screen.getByRole('button', { name: /다음/ }));

    await screen.findByText(/주택담보대출을 받을 지역을 알려주세요/);
    await screen.findByText(/코어시/);
    await userEvent.click(screen.getByText(/코어시/));
    await userEvent.click(screen.getByText(/송금동/));

    await screen.findByText(/정보가 맞는지 확인해주세요/);
    await userEvent.click(screen.getByText(/맞아요/));

    await screen.findByText(/대출 조건을 확인할게요/);

    await screen.findByText(/대출 조회 결과가 나왔어요/, undefined, { timeout: 5000 });
  });
  test('시작 - 주택 종류 선택 - 지역 선택 - 입력 확인 - 조회 대기 - 완료', async () => {
    const spyOnGetRegions = jest.spyOn(remotes, 'getRegions');
    const spyOnGetMe = jest.spyOn(remotes, 'getMe');
    const spyOnInquiryLoan = jest.spyOn(remotes, 'inquiryLoan');
    const spyOnGetLoanInquiryProgress = jest.spyOn(remotes, 'getLoanInquiryProgress');
    const spyOnGetLoanInquiryResult = jest.spyOn(remotes, 'getLoanInquiryResult');
    renderWithRouter(<App />, { route: '/start' });

    await screen.findByText(/토스 프론트엔드 기술과제를 시작할게요/);
    await userEvent.click(screen.getByRole('button', { name: /기술과제 시작/ }));

    await screen.findByText(/주택의 종류를 선택해주세요/);
    await userEvent.click(screen.getByLabelText(/아파트/));
    await userEvent.click(screen.getByRole('button', { name: /다음/ }));

    await screen.findByText(/주택담보대출을 받을 지역을 알려주세요/);
    await screen.findByText(/코어시/);
    await userEvent.click(screen.getByText(/코어시/));
    await userEvent.click(screen.getByText(/송금동/));
    expect(spyOnGetRegions).toHaveBeenCalled();

    await screen.findByText(/정보가 맞는지 확인해주세요/);
    expect(await screen.findByText(/강은규/)).toBeInTheDocument();
    expect(spyOnGetMe).toHaveBeenCalled();
    expect(await screen.findByText(/아파트 주소/)).toBeInTheDocument();
    expect(await screen.findByText(/코어시 송금동/)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/맞아요/));
    await waitFor(() =>
      expect(spyOnInquiryLoan).toBeCalledWith({
        propertyType: '아파트',
        address: ['코어시', '송금동'],
      })
    );

    await screen.findByText(/대출 조건을 확인할게요/);
    await waitFor(() => expect(spyOnGetLoanInquiryProgress).toHaveBeenCalled(), { timeout: 3000 });

    await screen.findByText(/대출 조회 결과가 나왔어요/, undefined, { timeout: 5000 });
    await waitFor(() => expect(spyOnGetLoanInquiryResult).toHaveBeenCalled());
  });
  test('시작 - 주택 종류 선택(주택/빌라) - 지역 선택 - 입력 확인 - 조회 대기 - 완료', async () => {
    const spyOnGetRegions = jest.spyOn(remotes, 'getRegions');
    const spyOnGetMe = jest.spyOn(remotes, 'getMe');
    const spyOnInquiryLoan = jest.spyOn(remotes, 'inquiryLoan');
    const spyOnGetLoanInquiryProgress = jest.spyOn(remotes, 'getLoanInquiryProgress');
    const spyOnGetLoanInquiryResult = jest.spyOn(remotes, 'getLoanInquiryResult');
    renderWithRouter(<App />, { route: '/start' });

    await screen.findByText(/토스 프론트엔드 기술과제를 시작할게요/);
    await userEvent.click(screen.getByRole('button', { name: /기술과제 시작/ }));

    await screen.findByText(/주택의 종류를 선택해주세요/);
    await userEvent.click(screen.getByLabelText('주택/빌라'));
    await userEvent.click(screen.getByRole('button', { name: /다음/ }));

    await screen.findByText(/주택담보대출을 받을 지역을 알려주세요/);
    await screen.findByText(/코어시/);
    await userEvent.click(screen.getByText(/코어시/));
    await userEvent.click(screen.getByText(/송금동/));
    expect(spyOnGetRegions).toHaveBeenCalled();

    await screen.findByText(/정보가 맞는지 확인해주세요/);
    expect(await screen.findByText(/강은규/)).toBeInTheDocument();
    expect(spyOnGetMe).toHaveBeenCalled();
    expect(await screen.findByText('주택/빌라 주소')).toBeInTheDocument();
    expect(await screen.findByText(/코어시 송금동/)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/맞아요/));
    await waitFor(() =>
      expect(spyOnInquiryLoan).toBeCalledWith({
        propertyType: '주택/빌라',
        address: ['코어시', '송금동'],
      })
    );

    await screen.findByText(/대출 조건을 확인할게요/);
    await waitFor(() => expect(spyOnGetLoanInquiryProgress).toHaveBeenCalled(), { timeout: 3000 });

    await screen.findByText(/대출 조회 결과가 나왔어요/, undefined, { timeout: 5000 });
    await waitFor(() => expect(spyOnGetLoanInquiryResult).toHaveBeenCalled());
  });

  test('2. 주택종류 선택 네비게이션', async () => {
    renderWithRouter(<App />, { route: '/property-type' });
    await screen.findByText(/주택의 종류를 선택해주세요/);

    await userEvent.click(screen.getByLabelText('주택/빌라'));
    await userEvent.click(screen.getByRole('button', { name: /다음/ }));

    await screen.findByText(/주택담보대출을 받을 지역을 알려주세요/);
  });
  test('3-2. 행정구역 순서대로 선택하기', async () => {
    renderWithRouter(<App />, { route: '/region-based-address' });

    await screen.findByText(/주택담보대출을 받을 지역을 알려주세요/);
    await screen.findByText(/코어시/);
    await userEvent.click(screen.getByText(/코어시/));
    await userEvent.click(screen.getByText(/송금동/));

    await screen.findByText(/정보가 맞는지 확인해주세요/);
  });
  test('3-2. 행정구역 선택 중 뒤로가기', async () => {
    const history = createMemoryHistory();
    history.push('/property-type');
    history.push('/region-based-address');
    const { rerender } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    await screen.findByText(/주택담보대출을 받을 지역을 알려주세요/);
    expect(await screen.findByText(/코어시/)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/코어시/));
    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    expect(await screen.findByText(/혜택구/)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/혜택구/));

    history.back();
    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(await screen.findByText(/혜택구/)).toBeInTheDocument();

    history.back();
    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(await screen.findByText(/코어시/)).toBeInTheDocument();

    history.back();
    rerender(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(await screen.findByText(/주택의 종류를 선택해주세요/)).toBeInTheDocument();
  });
  test('4-1. 다시 입력하기', async () => {
    renderWithRouter(<App />, { route: '/region-based-address' });
    await screen.findByText(/주택담보대출을 받을 지역을 알려주세요/);
    await screen.findByText(/코어시/);
    await userEvent.click(screen.getByText(/코어시/));
    await userEvent.click(screen.getByText(/송금동/));

    await screen.findByText(/정보가 맞는지 확인해주세요/);
    await userEvent.click(screen.getByText(/바꿀래요/));

    await screen.findByText(/주택담보대출을 받을 지역을 알려주세요/);
    expect(await screen.findByText(/코어시/)).toBeInTheDocument();
    expect(screen.queryByText(/송금동/)).not.toBeInTheDocument();
  });

  function renderWithRouter(Component: React.ReactElement, options: { route: string }) {
    return render(<MemoryRouter initialEntries={[options.route]}>{Component}</MemoryRouter>);
  }
});
