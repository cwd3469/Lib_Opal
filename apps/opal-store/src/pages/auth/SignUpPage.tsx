import styled from '@emotion/styled';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
    const { t, i18n } = useTranslation('signout');
    const langs = ['en', 'ko'];

    const toggleLocales = useCallback(
        (locale: string) => {
            i18n.changeLanguage(locale);
        },
        [i18n]
    );
    const checked = i18n.language;

    return (
        <Container>
            <fieldset style={{ borderWidth: 0, padding: 0 }}>
                {langs.map((el) => {
                    return (
                        <label style={{ cursor: 'pointer' }} key={el}>
                            <input
                                type="radio"
                                name="contact"
                                value={el}
                                checked={el === checked}
                                onClick={() => toggleLocales(el)}
                            />
                            <span>{el}</span>
                            {' / '}
                        </label>
                    );
                })}
            </fieldset>
            <Title>{t('page-header-name')}</Title>
            <Description>{t('page-header-description')}</Description>
            <form>
                <FormGroup>
                    <Label htmlFor="username">{t('name-input-label')}</Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder={t('name-input-placeholder')}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">{t('email-input-label')}</Label>
                    <Input type="email" id="email" name="email" placeholder={t('email-input-placeholder')} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">{t('pw-input-label')}</Label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder={t('pw-input-placeholder')}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirm-password">{t('pwCheck-input-label')}</Label>
                    <Input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder={t('pwCheck-input-placeholder')}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phone">{t('phoneNumber-input-label')}</Label>
                    <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={t('phoneNumber-input-placeholder')}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="address">{t('address-input-label')}</Label>
                    <Input
                        type="text"
                        id="address"
                        name="address"
                        placeholder={t('address-input-placeholder')}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="gender">{t('sex-input-label')}</Label>
                    <Select id="gender" name="gender" required>
                        <option value="">{t('sex-input-placeholder')}</option>
                        <option value="male">{t('sex-option-male')}</option>
                        <option value="female">{t('sex-option-female')}</option>
                        <option value="other">{t('sex-option-other')}</option>
                    </Select>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="dob">{t('birthDay-input-label')}</Label>
                    <Input type="date" id="dob" name="dob" required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="interests">{t('interests-input-label')}</Label>
                    <Input type="text" id="interests" name="interests" placeholder={t('interests-input-placeholder')} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="country">{t('country-input-label')}</Label>
                    <Select id="country" name="country" required>
                        <option value="">{t('country-input-placeholder')}</option>
                        <option value="kr">{t('country-option-kr')}</option>
                        <option value="us">{t('country-option-us')}</option>
                        <option value="jp">{t('country-option-jp')}</option>
                        <option value="cn">{t('country-option-cn')}</option>
                        <option value="uk">{t('country-option-uk')}</option>
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
