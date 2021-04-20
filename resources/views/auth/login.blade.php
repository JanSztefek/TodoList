<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>

        <x-jet-validation-errors class="mb-4" />

        @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
        @endif

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div>
                <x-jet-label for="email" value="{{ __('Email') }}" />
                <div class="row jtc-all">
                    <i class="fas fa-envelope"></i><x-jet-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus />
                </div>
            </div>
            
            <div class="mt-4">
                <x-jet-label for="password" value="Heslo" />
              <div class="row jtc-all">
                <i class="fas fa-lock"></i><x-jet-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="current-password" />
              </div>
            </div>

            <div class="mt-4">
                <label for="remember_me">
                    <x-jet-checkbox id="remember_me" name="remember" />
                    <span class="ml-2 text-sm text-gray-600">Zapamatovat si mě?</span>
                </label>
            </div>

            <div class="mt-4">
                <x-jet-button >
                    Přihlásit
                </x-jet-button>
               </div>

            <div class="mt-4">
                <a class=" text-sm text-gray-600 hover:text-gray-900" href="/register">
                    Registrovat
                </a>
                @if (Route::has('password.request'))
                    <a class="text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                        Zapomenuté heslo
                    </a>
                @endif
        
            </div>
        </form>
    </x-jet-authentication-card>
    <span class="closetarget"></span>
</x-guest-layout>
