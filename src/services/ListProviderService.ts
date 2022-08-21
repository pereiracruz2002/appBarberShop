import ProviderRepositories from "../repositories/ProviderRepositories";

export default class ListProviderService{
    async execute(){
        const providerRepository = new ProviderRepositories();
        const listProvider = await providerRepository.listAll();
        return listProvider;
    }
}