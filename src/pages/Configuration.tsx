import React, { useEffect, useContext } from 'react';
import { IonContent, IonPage, IonInput, IonSelect, IonSelectOption, IonButton, IonTextarea, IonIcon, IonAvatar } from '@ionic/react';
import Menu from '../components/Menu';
import UserService from '../core/services/UserService'; // Importar seu UserService
import { UserContext } from '../context/userContext';

function Configuration() {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const fetchUserData = async () => {
            const userService = new UserService();
            const userCpf = localStorage.getItem("cpf"); // Recupere o CPF armazenado
            if (userCpf) {
                const userData = await userService.getUserByCpf(userCpf);
                setUser(userData);
            }
        };

        fetchUserData();
    }, [setUser]);

    return (
        <IonPage>
            <Menu />
            <IonContent>
                <div className="mt-20 bg-gray3">
                    <div className='h-full flex items-center lg:justify-center'>
                        <div className='flex flex-col lg:justify-center'>
                            <div className='flex justify-center'>
                                <div className='flex-col w-full mx-5 lg:w-3/4 mt-10 lg:mt-0'>
                                    <div className='flex w-2/5 lg:w-full items-center justify-between'>
                                        <h1 className='text-3xl'>Configurações</h1>
                                        <IonButton>
                                            <IonIcon slot="start"></IonIcon>
                                            Editar
                                        </IonButton>
                                    </div>
                                    <div className='bg-white p-10 rounded-md mt-5'>
                                        {/* Área da imagem */}
                                        <div className='flex my-4 items-center gap-2'>
                                            <IonAvatar className='border-4 border-slate-300'>
                                                <img alt="Silhouette of a person's head" src={`https://ionicframework.com/docs/img/demos/avatar.svg`} />
                                            </IonAvatar>
                                            <h2 className="text-2xl">{user.fullName}</h2>
                                        </div>

                                        {/* Informações Pessoais */}
                                        <div className="space-y-4">
                                            <h2 className="text-2xl">Informações Pessoais</h2>
                                            <hr />
                                            <div className="flex flex-wrap -mx-2">
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonTextarea
                                                        label="Nome Completo"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        placeholder="Nome Completo"
                                                        value={user.fullName}
                                                        readonly // Para evitar edição, se necessário
                                                    ></IonTextarea>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonTextarea
                                                        label="CPF"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        placeholder="000.000.000-00"
                                                        value={user.cpf}
                                                        readonly
                                                    ></IonTextarea>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="E-mail"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="email"
                                                        placeholder="seuemail@exemplo.com"
                                                        value={user.email}
                                                        readonly
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Número do CRM"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="text"
                                                        placeholder="Número CRM"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Data de Nascimento"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="date"
                                                        value={user.birthDate}
                                                        readonly
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Número do Celular"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="tel"
                                                        placeholder="(00) 00000-0000"
                                                        value={user.phoneNumber}
                                                        readonly
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonSelect label="Área de Trabalho" labelPlacement="floating" fill="outline" placeholder="Selecione" >
                                                        <IonSelectOption value="Pediatria">Pediatria</IonSelectOption>
                                                        <IonSelectOption value="Cardiologia">Cardiologia</IonSelectOption>
                                                    </IonSelect>
                                                </div>
                                            </div>
                                        </div>

                                                                                {/* Endereço Consultório */}
                                                                                <div className="mt-8 space-y-4">
                                            <h2 className="text-2xl">Endereço Consultório</h2>
                                            <hr />
                                            <div className="flex flex-wrap -mx-2">
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Rua"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="text"
                                                        placeholder="Rua"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Número"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="number"
                                                        placeholder="Número"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Bairro"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="text"
                                                        placeholder="Bairro"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Cidade"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="text"
                                                        placeholder="Cidade"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Complemento (Opcional)"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="text"
                                                        placeholder="Complemento"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonSelect label="Estado" labelPlacement="floating" fill="outline" placeholder="Selecione">
                                                        <IonSelectOption value="SP">São Paulo</IonSelectOption>
                                                        <IonSelectOption value="RJ">Rio de Janeiro</IonSelectOption>
                                                    </IonSelect>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="CEP"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="text"
                                                        placeholder="00000-000"
                                                    ></IonInput>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dados do Consultório */}
                                        <div className="mt-8 space-y-4">
                                            <h2 className="text-2xl">Dados do Consultório</h2>
                                            <hr />
                                            <div className="flex flex-wrap -mx-2">
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="CPF"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="text"
                                                        placeholder="000.000.000-00"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Número CNS"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="text"
                                                        placeholder="Número CNS"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Celular"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="tel"
                                                        placeholder="(00) 00000-0000"
                                                    ></IonInput>
                                                </div>
                                                <div className="w-full md:w-1/2 px-2 mt-2">
                                                    <IonInput
                                                        label="Telefone (Opcional)"
                                                        labelPlacement="floating"
                                                        fill="outline"
                                                        type="tel"
                                                        placeholder="(00) 0000-0000"
                                                    ></IonInput>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Configuration;
