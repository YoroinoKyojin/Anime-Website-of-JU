import { Box,Container,Heading, useColorModeValue, VStack ,Input,Button} from '@chakra-ui/react';
import { useState } from 'react';

const CreateLoginPage = () => {
    const [newMember, setNewMember] = useState({
        name: "",
        email: "",
        phone_number: "",
    });

const handleAddMember=() =>{
    console.log(newMember);
}
    return <Container maxW={"container.sm"}>
        <VStack spacing ={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
            ENTER YOUR CREDENTIALS
        </Heading>
        <Box w={"full"} bg={useColorModeValue("red.100","gray.800")}
         p={6} rounded={"lg"} shadow={"md"}>
            <VStack spacing={4}>
                <Input
                 placeholder='Name'
                 name='name'
                 type='string'
                 value={newMember.name}
                 onChange={(e) => setNewMember({...newMember,name:e.target.value})}
                />

                <Input
                 placeholder='Email'
                 name='email'
                 type='string'
                 value={newMember.email}
                 onChange={(e) => setNewMember({...newMember,email:e.target.value})}
                />

                <Input
                 placeholder='Phone Number'
                 name='phone'
                 type='number'
                 value={newMember.phone}
                 onChange={(e) => setNewMember({...newMember,phone:e.target.value})}
                />
<Button colorScheme='blue' onClick={handleAddMember} w='full'>
    Login
</Button>

            </VStack>
         </Box>
        </VStack>
    </Container>
};

export default CreateLoginPage;
