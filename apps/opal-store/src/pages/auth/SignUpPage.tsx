import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
    const { t } = useTranslation('main');
    return (
        <Container>
            <Title>{t('title')}</Title>
            <Description>
                회원가입을 통해 다양한 혜택을 누리세요!
                <br />
                모든 필드를 정확히 입력해주세요.
            </Description>
            <form>
                <FormGroup>
                    <Label htmlFor="username">이름</Label>
                    <Input type="text" id="username" name="username" placeholder="이름을 입력하세요" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">이메일</Label>
                    <Input type="email" id="email" name="email" placeholder="이메일을 입력하세요" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">비밀번호</Label>
                    <Input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirm-password">비밀번호 확인</Label>
                    <Input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="비밀번호를 다시 입력하세요"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phone">전화번호</Label>
                    <Input type="tel" id="phone" name="phone" placeholder="전화번호를 입력하세요" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="address">주소</Label>
                    <Input type="text" id="address" name="address" placeholder="주소를 입력하세요" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="gender">성별</Label>
                    <Select id="gender" name="gender" required>
                        <option value="">성별을 선택하세요</option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                        <option value="other">기타</option>
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="dob">생년월일</Label>
                    <Input type="date" id="dob" name="dob" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="interests">관심사</Label>
                    <Input type="text" id="interests" name="interests" placeholder="관심사를 입력하세요" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="country">국가</Label>
                    <Select id="country" name="country" required>
                        <option value="">국가를 선택하세요</option>
                        <option value="kr">대한민국</option>
                        <option value="us">미국</option>
                        <option value="jp">일본</option>
                        <option value="cn">중국</option>
                        <option value="uk">영국</option>
                        {/* 추가적인 국가 옵션을 필요에 따라 추가하세요 */}
                    </Select>
                </FormGroup>
                <Button type="submit" value="회원가입" />
            </form>
        </Container>
    );
};

export default SignUpPage;

const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`;

const Description = styled.p`
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.5;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 14px;
    box-sizing: border-box;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 14px;
    box-sizing: border-box;
`;

const Button = styled.input`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
    }
`;
