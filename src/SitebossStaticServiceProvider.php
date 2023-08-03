<?php

namespace NotFound\SitebossStatic;

use Illuminate\Support\ServiceProvider;

class SitebossStaticServiceProvider extends ServiceProvider
{
    public function boot(): void
    {

        $this->publishes([__DIR__.'/static/' => public_path('siteboss')], 'siteboss-static');
    }
}
